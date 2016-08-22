import 'babel-polyfill'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'
import App from './App'
import rootReducer from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('app');
const store = createStore(rootReducer);
render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    const RedBox = require('redbox-react').default;
    try {
      render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        rootEl
      )
    } catch (e) {
      render(
        <RedBox error={e}>
          <AppContainer>
            <NextApp />
          </AppContainer>
        </RedBox>,
        rootEl
      )
    }
  });
}