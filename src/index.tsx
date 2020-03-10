'use strict';

import React from 'react';
import { render } from 'react-dom';

import App from 'components/App';

import './scss/global.scss';

render(
  <App />,
  document.getElementById('app')
);