import * as React from "react";
import {
  Text,
  Animated,
  TouchableOpacity,
  View,
  ScrollView
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
import { useAnimatedRef } from "react-native-reanimated";

const scrollOffsetY = new Animated.Value(0)
const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 60;

const EnterUserInfoPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const scrollRef = useAnimatedRef<ScrollView>()
  const [showOutPut, setShowOutPut] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(800);
  const [inputs, setInputs] = React.useState({ firstName: '', lastName: '', phone: '', email: '', age: '' });
  const [errors, setErrors] = React.useState({ email: '', age: '' });
  const [isFormValid, setisFormValid] = React.useState<boolean>(false)
  // const dispatch = useDispatch();

  const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  const fadeOutDetailOpacity = scrollOffsetY.interpolate({
    inputRange: [0, 40],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
    validate(text, input)
  };


  const onSubmit = () => {
    setShowOutPut(true);
  };

  const scrollToTop = () => {
    setContentHeight(800)
    setShowOutPut(false);
  };
  const handleError = (error: string, input: string) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const validate = async (text: string, input: string) => {
    if (input == 'email') {
      const isEmailValid = Utils.isEmailValid(text);
      setisFormValid(isEmailValid);
      handleError(!isEmailValid && text.length > 0 && 'valid email (example@jolocom.com)' || '', input);
    }
  };

  React.useEffect(() => {
    scrollRef.current.scrollTo({ x: 0, y: showOutPut ? contentHeight : -contentHeight, animated: true });
  }, [contentHeight, showOutPut]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: Strings.enterYourEmailAddress })
    scrollRef.current.scrollTo({ x: 0, y: contentHeight, animated: true });
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <KeyboardAwareView  >
        <Animated.View
          style={{
            left: 0,
            right: 0,
            top: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "black",
            height: headerScrollHeight,
          }}
        >
          <View style={{ width: '100%', justifyContent: 'flex-start', backgroundColor: 'black', flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ width: '10%', alignSelf: 'center', marginHorizontal: 10, backgroundColor: 'black' }}>
              <IconImage size={26} name={'backWhite'} iconSet={IconSets.LOCAL_ICON} />
            </TouchableOpacity>
            <Text style={styles.headerTitleText}> {Strings.addInfoHeaderTitle} </Text>
          </View>
          <Animated.View style={{ opacity: fadeOutDetailOpacity }}>
            <Text style={{ textAlign: 'center', color: "white", fontSize: 18, padding: 20 }}>{Strings.addInfoHeaderDetailMessage}</Text>
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView

          ref={scrollRef}
          style={{ padding: 10, paddingTop: 30, backgroundColor: colors.JOLOCOM_PRIMARY }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
          ], { useNativeDriver: false })}
          scrollEventThrottle={16}
        >
          <View style={{ height: contentHeight, backgroundColor: colors.JOLOCOM_PRIMARY }}>
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
                style={[styles.continueButton, { marginBottom: 100 }]}
              />
              <PrimaryButton
                disabled={false}
                title={"See Bonus tasks"}
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