import * as React from 'react';
import Router from './src/index';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <React.Fragment>
         <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
    </React.Fragment>
  );
};
export default App;