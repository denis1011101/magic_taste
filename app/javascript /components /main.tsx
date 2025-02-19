import React from 'react';
import ReactDOM from 'react-dom';
import Placeholder from './Placeholder';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Placeholder />,
    document.body.appendChild(document.createElement('div')),
  );
});