import * as React from "react";
import {
  Text,
  Animated,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import { IconImage, IconSets, PrimaryButton, SecondaryInput } from "../../../components/atoms";
import styles from "./styles";
import Strings from "../../../res/i18n";
import { KeyboardAwareView } from "../../../components/atoms/keyboard-aware-view";
import { setUserEmail } from '../../../store/authentication/actions';
import { useDispatch } from "react-redux";
import Utils from '../../../utilities/ValidationUtils'
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";



const EnterEmailPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  const [inputs, setInputs] = React.useState({firstName:'', lastName: '', phone: '', email: '', age: ''});
  const [errors, setErrors] = React.useState({email:'', age:''});
  const [isFormValid, setisFormValid] = React.useState<boolean>(false)
  const dispatch = useDispatch();
  // const onChangeEmail = (email: string) => {
  //   setEmail(email);
  // }

  const scrollOffsetY = new Animated.Value(0)
  const H_MAX_HEIGHT = 150;
  const H_MIN_HEIGHT = 60;
  const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });
  const fadeOutDetailOpacity = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
    validate(text, input)
  };

  const handleError = (error: string, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const validate = async (text:string, input:string) => {
    if (input == 'email') {
      const isEmailValid =  Utils.isEmailValid(text);
      setisFormValid(isEmailValid);
      handleError(!isEmailValid && text.length > 0 && 'valid email (example@jolocom.com)' || '', input);
    }
    if (input == inputs.email) {
      handleError('You must be 18 years', 'age');
      setisFormValid(false)
    }
  };
  
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: Strings.enterYourEmailAddress })
  },[navigation]);
  return (
<SafeAreaView style={{flex:1,backgroundColor: 'black'}}>
<KeyboardAwareView  >

<Animated.View
  style={{
    left: 0,
    right: 0,
    top: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "black",
    height: headerScrollHeight,
  }}
  >
    <View style={{width:'100%', justifyContent:'flex-start', backgroundColor:'black', flexDirection:'row'}}>
    <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ width:'10%', alignSelf:'center', marginHorizontal: 10,  backgroundColor:'black' }}>
        <IconImage size={26} name={'backWhite'} iconSet={IconSets.LOCAL_ICON} />
      </TouchableOpacity>
      <Text style={styles.headerTitleText}> {Strings.addInfoHeaderTitle} </Text>
   </View>
      <Animated.View style={{opacity: fadeOutDetailOpacity}}>
          <Text style={{ textAlign:'center', color:"white", fontSize: 18, padding: 20 }}>{Strings.addInfoHeaderDetailMessage}</Text>
        </Animated.View>
</Animated.View>
    <ScrollView
        style={{padding: 10,backgroundColor:"black"}}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
        ],{useNativeDriver: false})}
        scrollEventThrottle={16}
        >
     <View style={{height: 800}}>
          <SecondaryInput
            onChangeText={text => handleOnchange(text, 'firstName')}
            onFocus={() => handleError(null, 'firstName')}
            iconName="account-outline"
            placeholder={Strings.firstNamePlaceHolder}
       
          />
          <SecondaryInput
            onChangeText={text => handleOnchange(text, 'lastName')}
            onFocus={() => handleError(null, 'lastName')}
            iconName="account-outline"
            placeholder="Last name"
        
          />
         <SecondaryInput
            keyboardType={"number-pad" || "numeric"}
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            placeholder="Phone"
           
          />

        <SecondaryInput
            onChangeText={(text:string) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            placeholder="Email"
            error={errors.email}
          />
         <SecondaryInput
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'age')}
            onFocus={() => handleError(null, 'age')}
            iconName="calendar-outline"
            placeholder="Age"
            error={errors.age}
          />
    
      
      <PrimaryButton
     
        disabled={!isFormValid}
        title={Strings.submitButtonText}
        onPress={() => navigation.navigate(Routes.SELECT_COUNTRY_SCREEN)}
        style={styles.continueButton}
      />
      </View>

    </ScrollView>
  
    </KeyboardAwareView>
    
</SafeAreaView>


  );
};
export  {EnterEmailPage};