import * as React from "react";
import {
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import { IconImage, IconSets, PrimaryButton } from "../../../components/atoms";
import styles from "./styles";
import Strings from "../../../res/i18n";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";


const UserSubmissionPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: Strings.submitButtonText })
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
      <IconImage iconStyle={{ marginTop: 30 }} size={130} name={'verified'} iconSet={IconSets.LOCAL_ICON} />
      <Text style={{ textAlign: 'center', color: "white", fontSize: 18, padding: 20 }}>{Strings.submissionResultSuccessText}</Text>
      <PrimaryButton
        disabled={false}
        title={Strings.startOver}
        onPress={() => navigation.goBack()}
        style={styles.startOverButton}
      />
      <PrimaryButton
        disabled={false}
        title={Strings.continue}
        onPress={() => navigation.navigate(Routes.SELECT_COUNTRY_SCREEN)}
        style={styles.continueButton}
      />
    </SafeAreaView>


  );
};
export default UserSubmissionPage;