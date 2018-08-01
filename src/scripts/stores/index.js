import { combineReducers } from 'redux';
import expressApplication from './express';
import sites from './sites';

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createChromeStorage from 'redux-persist-chrome-storage'

const reducer = combineReducers({
  expressApplication,
  sites,
});

// Create a ChromeStorage instance using the chrome runtime and the Sync StorageArea.
const storage = createChromeStorage(window.chrome, 'sync');

const config = {
  key: 'root',
  storage,
  blacklist: ['expressApplication']
};

const persistedReducer = persistReducer(config, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };