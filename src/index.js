import 'babel-polyfill'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'

import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import './stylesheets/sign.s.css';
import './stylesheets/cropper.min.css'
// import './stylesheets/main.css';

const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];

const rootEl = document.getElementById('app');
// const store = createStore(rootReducer,
// 						  applyMiddleware(...middleware), 
// 						  window.devToolsExtension && window.devToolsExtension());

const finalCreateStore = compose(
	applyMiddleware(...middleware),
	window.devToolsExtension && window.devToolsExtension()
	)(createStore);
const store= finalCreateStore(rootReducer);

render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootEl
);
