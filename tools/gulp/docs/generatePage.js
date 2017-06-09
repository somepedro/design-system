const crypto = require('crypto');
const fs = require('mz/fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Docs = require('../../../packages/docs/src/scripts/Docs').default;
const path = require('path');
const recursive = require('mkdir-recursive');

function generatePage(routes, page, rootPath) {
  const componentRenderer = () => {
    if (process.env.NODE_ENV === 'development') {
      // In development mode we let the client handle all of the React rendering,
      // since if we were generating the HTML pages in our build process, Gulp would
      // need restarted each time a React file changes, which is super annoying.
      return '';
    }

    return ReactDOMServer.renderToString(<Docs page={page} routes={[]} />);
  };

  if (rootPath) {
    rootPath = `${rootPath}/`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${page.header} - CMSgov Design System</title>

  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet">
  <link rel="stylesheet" href="/${rootPath}public/styles/docs.css" />
</head>
<body class="ds-base">
  <div id="js-root">
    <div>${componentRenderer()}</div>
  </div>
  <script type="text/javascript">
    var page = ${JSON.stringify(page)};
    var routes = ${JSON.stringify(routes)};
  </script>
  <script src="/${rootPath}public/scripts/index.js"></script>
</body>
</html>`;

  return updateFile(html, page, rootPath);
}

/**
 * To ensure we're not unnecessarily regenerating each page each time the
 * generate-pages task is called, we first compare the checksums.
 * @return {Boolean} Should the file be regenerated?
 */
function checkCache(html, path) {
  return fs.readFile(path, 'utf8')
    .then(data => {
      const fileHash = crypto.createHash('md5').update(data).digest('hex');
      const htmlHash = crypto.createHash('md5').update(html).digest('hex');
      return fileHash !== htmlHash;
    })
    .catch(() => true); // File doesn't exist
}

function parsedPath(page) {
  let uri = page.referenceURI;

  if (uri === 'public') throw Error('Filename can\'t be "public"');
  let dir = path.resolve(__dirname, `../../../docs/${uri}`);

  return {
    dir: dir,
    path: path.resolve(dir, 'index.html')
  };
}

function saveToFile(html, pathObj, retry = true) {
  return new Promise(resolve => {
    recursive.mkdir(pathObj.dir, (err) => {
      if (err && retry) {
        // A race condition can sometimes occur where a directory is created
        // in the middle of this method's execution, resulting in a "file
        // already exists" error. This is a hacky (and probably not the best)
        // way of getting around it.
        return saveToFile(html, pathObj, false).then(resolve);
      }

      fs.writeFile(pathObj.path, html)
        .then(() => resolve(true));
    });
  });
}

function updateFile(html, page, rootPath) {
  let pathObj = parsedPath(page, rootPath);

  return checkCache(html, pathObj.path)
    .then(changed => {
      if (changed) {
        return saveToFile(html, pathObj);
      }

      return Promise.resolve(false);
    });
}

module.exports = generatePage;