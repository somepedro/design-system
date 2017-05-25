import Button from './Button';

export const dependencies = {
  Button: Button
};

export default (`
  <div>
    <Button>React button</Button>

    <Button
      className='ds-u-margin-left--1'
      href='http://example.com'
      target='_blank'
      variation='primary'
    >
      React anchor button
    </Button>
  </div>
`).trim();
