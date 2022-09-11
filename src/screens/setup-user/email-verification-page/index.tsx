import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import {PrimaryButton, IconImage, IconSets } from "../../../components/atoms";
import styles from "./styles";
import Strings from "../../../res/i18n";
import { login } from '../../../store/authentication/actions';
import { useDispatch } from "react-redux";
import { View } from "react-native";

const EmailVerificationPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();
  
  return (
  
        <View style={styles.container} >
        <View style={styles.contentView}>
        <IconImage name={'verifyEmail'} iconSet={IconSets.LOCAL_ICON} />
       </View>
          <PrimaryButton
              disabled={false}
              title={Strings.demoAccount}
              onPress={() => {
                dispatch(login()); // Dummy login in redux
              }}
              style={styles.continueButton}
            />
        </View>
    
  );
};
export default EmailVerificationPage;