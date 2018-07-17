import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App';
import rootReducer from './stores/index';
import { createStore } from 'redux'

const store = createStore(rootReducer);

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

window.messageListener = function messageListener() {
  chrome.devtools.inspectedWindow.eval('window.__expressDebugData', function (value) {
    // Once we get the data pass it into the store.
    store.dispatch({
      type: 'EXPRESS_POPULATE',
      data: value,
    });
  });
};
