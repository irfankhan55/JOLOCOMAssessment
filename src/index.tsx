import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux'
import MainNavigator from './navigators/MainNavigator';
import SplashScreen from 'react-native-splash-screen';
import AuthNavigator from './navigators/AuthNavigator';
import { loggedInUser } from './store/authentication/selectors';
import { store } from './store/configureStore';
import { StoreState } from './store/storeState';
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.',
]);
export default function Router() {
    const user = useSelector((state: StoreState) => loggedInUser(state));
    const isUserLoggedIn = user?.isLoggedIn
    return (
     <Provider store={store}>
      <NavigationContainer onReady={() => SplashScreen.hide()}>
        {isUserLoggedIn? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
     </Provider>
      
    );
  }