import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App';
import { store, persistor } from './stores/index';
import { PersistGate } from 'redux-persist/integration/react'

render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
), document.getElementById('root'));

window.messageListener = function messageListener(message) {
  console.log(message);
  chrome.devtools.inspectedWindow.eval('window.__expressDebugData', function (value) {
    // Once we get the data pass it into the store.
    if (typeof value !== "undefined") {
      store.dispatch({
        type: 'EXPRESS_POPULATE',
        data: value,
      });
    }
  });
};