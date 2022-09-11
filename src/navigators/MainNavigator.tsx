import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps
} from '@react-navigation/drawer';
import Routes from './routes';
import { SideMenu } from '../components/molecules';
import HomeScreen from '../screens/dashboard/index';
import SettingsScreen from '../screens/settings/index';
const Drawer = createDrawerNavigator();

type SideMenuProps = DrawerContentComponentProps;

const Router = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      screenOptions={{
        drawerType:'slide',
        swipeEdgeWidth: 64,
        drawerStyle: {
          width: 64
        }
      }}
      drawerContent={(props: SideMenuProps) => <SideMenu {...props} />}
    >
      <Drawer.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: true }}
      />

        <Drawer.Screen
        name={Routes.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}
export default Router;