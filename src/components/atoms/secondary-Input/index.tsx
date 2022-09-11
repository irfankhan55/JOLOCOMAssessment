import React from 'react';
import {View, Text, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import Colors from '../../../res/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

type SecondaryInputProps = {
  title?: string;
  keyboardType?:KeyboardTypeOptions
  iconName?: string;
  error?: string;
  placeholder?:string;
  password?: boolean;
  onFocus: () => void;
  onChangeText: (text: string) => void;
}
const SecondaryInput = ({
  title,
  keyboardType,
  iconName,
  error,
  password,
  placeholder,
  onFocus,
  onChangeText,
  ...rest
}: SecondaryInputProps) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  const borderColor = error
  ? Colors.INPUT_ERROR
  : isFocused
  ? Colors.JOLOCOM_BLUE
  : Colors.TEXT_SECONDARY
  return (
    <View style={{marginBottom: 1}}>
      <View
        style={[
          styles.inputContainer,
          {
            
            borderColor:borderColor,
            
          },
        ]}>
        <Icon
          name={iconName}
          style={{color:borderColor, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          placeholderTextColor={Colors.TEXT_SECONDARY}
          style={{ color: Colors.JOLOCOM_BLUE, flex: 1}}
          onChangeText={onChangeText}
          {...rest}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: Colors.JOLOCOM_BLUE, fontSize: 22}}
          />
        )}
      </View>
      {!!error && (
        <Text style={{marginTop: 7, color: Colors.INPUT_ERROR, fontSize: 12}}>
          {error|| ''}
        </Text>
      )}
    </View>
  );
};



export {SecondaryInput} ;
