import { Button } from '@cmsgov/design-system-core';
import React from 'react';
import ReactDOM from 'react-dom';

// Load SCSS base
import './styles/index.scss';

const Example = function() {
  return (
    <div>
      <Button>Hello world</Button>
    </div>
  );
};

ReactDOM.render(<Example />,
  document.getElementById('root')
);
