import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux'
import MainNavigator from './navigators/MainNavigator';
import SplashScreen from 'react-native-splash-screen';
import AuthNavigator from './navigators/AuthNavigator';
import { loggedInUser } from './store/authentication/selectors';
import { store } from './store/configureStore';
import { StoreState } from './store/storeState';

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