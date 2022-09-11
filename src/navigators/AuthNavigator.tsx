import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconImage, IconSets } from "../components/atoms";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectLanguagePage from '../screens/setup-user/select-language-page';
import EnterEmailPage from '../screens/setup-user/enter-email-page';
import SelectCountryPage from '../screens/setup-user/select-country-page';
import EmailVerificationPage from '../screens/setup-user/email-verification-page';
import { AuthParamList } from './types';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Strings from '../res/i18n';

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthNavigator = () => {
  const navigation = useNavigation();
  const headerLeft = (): JSX.Element => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 10 }}>
        <IconImage size={20} name={'back'} iconSet={IconSets.LOCAL_ICON} />
      </TouchableOpacity>)
  }

  const headerRight = (): JSX.Element => {
    return (
      <TouchableOpacity
        onPress={() => alert('Right Menu Clicked')}
        style={{ marginLeft: 10 }}>
        <IconImage size={20} name={'logo'} iconSet={IconSets.LOCAL_ICON} />
      </TouchableOpacity>)
  }

  return (
    <Stack.Navigator
      initialRouteName="SelectLanguagePage"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen options={{ headerShown: false }} name="SelectLanguagePage" component={SelectLanguagePage} />
      <Stack.Screen name="EnterEmailPage" component={EnterEmailPage}
        options={{
          headerShown: false,
          title: Strings.enterYourEmailAddress,
          headerStyle: styles.headerStyle,
          headerLeft: headerLeft,
          headerRight: headerRight
        }}
      />
      <Stack.Screen name="SelectCountryPage" component={SelectCountryPage}
        options={{
          title: Strings.yourNewAccount,
          headerStyle: styles.headerStyle,
          headerLeft: headerLeft,
          headerRight: headerRight
        }}
      />
    <Stack.Screen name="EmailVerificationPage" component={EmailVerificationPage}
        options={{
          gestureEnabled: false,
          title: Strings.verifiedYourEmail,
          headerStyle: styles.headerStyle,
          headerLeft: headerLeft,
          headerRight: headerRight
        }}
      />
    </Stack.Navigator>
  );
}
export default AuthNavigator;