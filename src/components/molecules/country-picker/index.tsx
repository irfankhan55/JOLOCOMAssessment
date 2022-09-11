import * as React from "react";
import styles from "./styles";
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country, Region} from './types'
import { View, Text, TextInputProps } from "react-native";
import Strings from "../../../res/i18n";
import { PrimaryTextField } from "../../atoms/primary-input";


const WorldCountryPicker = ({...rest}) => {
    const [countryCode, setCountryCode] = React.useState<CountryCode>(rest.countryCode)
    // const [region, setRegion] = React.useState<Region>('Europe') 
    const [country, setCountry] = React.useState<Country>(rest.country)
    const [withCountryNameButton] = React.useState<boolean>(
      true,
    )
    const [withFlag, setWithFlag] = React.useState<boolean>(true)
    const [withEmoji, setWithEmoji] = React.useState<boolean>(true)
    const [withFilter, setWithFilter] = React.useState<boolean>(true)
    const [withAlphaFilter, setWithAlphaFilter] = React.useState<boolean>(false)
    const [withCallingCode, setWithCallingCode] = React.useState<boolean>(false)
    const [withCloseButton, setwithCloseButton] = React.useState<boolean>(false)
    const onSelect = (country: Country) => {
      setCountryCode(country.cca2)
      setCountry(country)
    }  
    return (
      <View style={{width:'100%',flexDirection:'column'}}>
         <Text style={styles.titleStyle}>{Strings.whatCountryDoYouLiveIn}</Text>
          <CountryPicker
          {...{
            containerButtonStyle: styles.countryPickerStyle,
            modalProps:{ presentationStyle:'pageSheet'},
            renderCountryFilter: (props:TextInputProps) =>{
              return ( <PrimaryTextField
                          style={styles.inputStyle}
                          titleStyle={styles.countryPickerTitle}
                          title={Strings.country}
                          placeholder={Strings.selectCountry}
                          value={props.value}
                          onChangeText={(text:string) => props.onChangeText(text)}
                      />)
            },
            country,
            countryCode,
            withFilter,
            withFlag,
            withCountryNameButton,
            withCloseButton,
            withAlphaFilter,
            withCallingCode,
            withEmoji,
            onSelect,
            ...rest
          }}
        />
      </View>
    )};
export  { WorldCountryPicker }