import * as React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import { PrimaryButton, PrimaryTextField } from "../../../components/atoms";;
import styles from "./styles";
import { CountryCode, Country } from '../../../components/molecules/country-picker/types'
import { useDispatch, useSelector } from "react-redux";
import Strings from "../../../res/i18n";
import { WorldCountryPicker } from "../../../components/molecules";
import { setUserCountry } from '../../../store/authentication/actions';
import { StoreState } from "~/store/storeState";

const SelectCountryPage = () => {
  const defaultCountryFromStore = useSelector((state: StoreState) => state.loginReducer.user?.country)
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = React.useState<CountryCode>(defaultCountryFromStore?.cca2)
  const [country, setCountry] = React.useState<Country>(defaultCountryFromStore)
  
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>{Strings.dummyText}</Text>
        <WorldCountryPicker
          {...{
            countryCode,
            onSelect,
          }}
        />
        {country?.cca2 == 'US' && (
          //TODO: Make state picker sheet and Create Enum for SelectedCountry US
          <PrimaryTextField
            title={Strings.whichStateDoYouLiveIn}
            placeholder={Strings.yourEmailAddress}
            value={""}
            onChangeText={(text: string) => { console.log("TEXT = ,", text) }}
          />
        )}
      </View>

      <PrimaryButton
        disabled={country ? false : true}
        title={Strings.continue}
        onPress={() => {
          dispatch(setUserCountry(country));
          navigation.navigate(Routes.EMAIL_VERFICATION_PAGE, {})
        }
        }
        style={styles.continueButton}
      />

    </View>

  );
};
export default SelectCountryPage;
