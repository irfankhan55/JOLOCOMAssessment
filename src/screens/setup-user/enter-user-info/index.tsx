import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform
} from "react-native"
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import { IconImage, IconSets, PrimaryButton, SecondaryInput } from "../../../components/atoms";
import styles from "./styles";
import Strings from "../../../res/i18n";
import { KeyboardAwareView } from "../../../components/atoms/keyboard-aware-view";
// import { useDispatch } from "react-redux";
import Utils from '../../../utilities/ValidationUtils'
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../res/colors";
import Animated, { useAnimatedRef, Extrapolate, interpolate, useAnimatedScrollHandler, useSharedValue, withTiming, useAnimatedStyle, } from "react-native-reanimated";


const H_MAX_HEIGHT = 120;
const H_MIN_HEIGHT = 45;

const EnterUserInfoPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const scrollOffsetY = useSharedValue(0);
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const [showOutPut, setShowOutPut] = React.useState(false);
  const [inputs, setInputs] = React.useState({ firstName: '', lastName: '', phone: '', email: '', age: '' });
  const [errors, setErrors] = React.useState({ email: '', age: '' });
  // const [isFormValid, setisFormValid] = React.useState<boolean>(false)

  const { height } = Dimensions.get('window');

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffsetY.value = event.contentOffset.y;
  });

  const animatedHeaderStyles = useAnimatedStyle(() => {
    const headerScrollHeight = interpolate(
      scrollOffsetY.value,
      [0, H_MIN_HEIGHT],
      [H_MAX_HEIGHT, H_MIN_HEIGHT],
      Extrapolate.CLAMP
    );
    return {
      height: headerScrollHeight,
    };
  });

  const animatedOpacityStyle = useAnimatedStyle(() => {
    const detailLabelOpacity = interpolate(
      scrollOffsetY.value,
      [0, 30],
      [1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: detailLabelOpacity,
      transform: [{ rotateX: (scrollOffsetY.value > 0) ? `${-scrollOffsetY.value * 0.2}rad` : `${0}rad` }],
    };
  });

  const animatedbackButtonStyle = useAnimatedStyle(() => {
    const backButtonOpacity = interpolate(
      scrollOffsetY.value,
      [0, 30],
      [0, 1],
      Extrapolate.CLAMP
    );
    const rotate = interpolate(
      scrollOffsetY.value,
      [20, 30],
      [-90, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: backButtonOpacity,
      transform: [{ rotate: `${rotate}deg` }]
    };
  });

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
    validate(text, input)
  };


  const onSubmit = () => {
    setShowOutPut(true);
  };

  const scrollToTop = () => {
    setShowOutPut(false);
  };

  const handleError = (error: string, input: string) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const validate = async (text: string, input: string) => {
    if (input == 'email') {
      const isEmailValid = Utils.isEmailValid(text);
      // setisFormValid(isEmailValid);
      handleError(!isEmailValid && text.length > 0 && 'valid email (example@jolocom.com)' || '', input);
    }
  };

  React.useEffect(() => {
    (showOutPut) ?
      scrollRef.current.scrollTo({ x: 0, y: height - H_MIN_HEIGHT, animated: true }) :
      scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })

  }, [showOutPut]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.JOLOCOM_PRIMARY }}>
      <KeyboardAwareView style={{ padding: 0 }}  >
        <Animated.View
          style={[{
            left: 0,
            right: 0,
            top: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.JOLOCOM_PRIMARY,

          }, animatedHeaderStyles]}
        >
          <View style={{ height: H_MIN_HEIGHT, width: '100%', backgroundColor: colors.JOLOCOM_PRIMARY, flexDirection: 'row' }}>
            <AnimatedTouchable
              onPress={() => navigation.goBack()}
              style={[{ width: '10%', alignSelf: 'flex-start', backgroundColor: 'black' },
                animatedbackButtonStyle]}>
              <IconImage size={26} name={'backWhite'} iconSet={IconSets.LOCAL_ICON} />
            </AnimatedTouchable>
            <Text style={styles.headerTitleText}> {Strings.addInfoHeaderTitle} </Text>
          </View>
       
            <Animated.Text style={[{ backgroundColor:colors.BLACK,  height: 60, width: '80%', textAlign: 'center', color: "white", fontSize: 13, padding: 10 }, animatedOpacityStyle]}>
              {Strings.addInfoHeaderDetailMessage}
            </Animated.Text>
     
        </Animated.View>
        <Animated.ScrollView
          ref={scrollRef}
          style={{ paddingHorizontal: 10, paddingTop: 30, backgroundColor: colors.JOLOCOM_PRIMARY }}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        >
          <View style={{ height: height - H_MIN_HEIGHT, backgroundColor: colors.JOLOCOM_PRIMARY }}>
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
              keyboardType={Platform.OS == 'android' ? "numeric" : "number-pad"}
              onChangeText={text => handleOnchange(text, 'phone')}
              onFocus={() => handleError(null, 'phone')}
              iconName="phone-outline"
              placeholder="Phone"

            />

            <SecondaryInput
              onChangeText={(text: string) => handleOnchange(text, 'email')}
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
              // disabled={!isFormValid}
              disabled={false}
              title={Strings.submitButtonText}
              onPress={onSubmit}
              style={styles.continueButton}
            />
          </View>

          {showOutPut &&
            <View>
              <IconImage iconStyle={{ alignSelf: 'center', marginTop: 30 }} size={130} name={'verified'} iconSet={IconSets.LOCAL_ICON} />
              <Text style={{ textAlign: 'center', color: "white", fontSize: 18, padding: 20 }}>{Strings.submissionResultSuccessText}</Text>
              <PrimaryButton
                disabled={false}
                title={"Scroll to top"}
                onPress={scrollToTop}
                style={[styles.continueButton, { marginBottom: 10 }]}
              />
              <PrimaryButton
                disabled={false}
                title={"More Animations"}
                onPress={() => { navigation.navigate(Routes.USER_SUBMISSION_PAGE) }}
                style={[styles.continueButton, { marginBottom: 100 }]}
              />
            </View>
          }

        </Animated.ScrollView>

      </KeyboardAwareView>

    </SafeAreaView>


  );
};
export default EnterUserInfoPage;