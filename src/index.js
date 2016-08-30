import 'babel-polyfill'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'

import rootReducer from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import './stylesheets/sign.s.css';
import './stylesheets/cropper.min.css'

const rootEl = document.getElementById('app');
const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootEl
);
