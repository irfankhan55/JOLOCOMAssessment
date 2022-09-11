import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
const middleware = [thunk];


const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // we can use any secure storage here, or any logic to encrypt the store data
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

let persistor = persistStore(store);

export { store, persistor };
