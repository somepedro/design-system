/**
 * ReactComponentExample takes a component example's render function and
 * outputs a rendered example as well as a code snippet.
 */
import CodeSnippet from './CodeSnippet';
import Prism from 'prismjs';
require('prismjs/components/prism-jsx');
import PropTypes from 'prop-types';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider
} from 'react-live';

class ReactComponentExample extends React.PureComponent {
  highlightedMarkup() {
    let markup = reactElementToJSXString(this.props.renderComponent(), {
      showDefaultProps: false,
      showFunctions: true
    });

    return Prism.highlight(markup, Prism.languages.jsx);
  }

  render() {
    return (
      <div className='markup markup--react'>
        <LiveProvider mountStylesheet={false} code={this.props.renderComponent} scope={this.props.dependencies}>
          <div className='ds-u-margin-bottom--2'>
            <LiveEditor />
          </div>

          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
}

ReactComponentExample.propTypes = {
  /**
   * The exported render function from the .example.jsx file
   */
  renderComponent: PropTypes.func.isRequired
};

export default ReactComponentExample;
