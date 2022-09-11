import * as React from 'react';
import { TextInput, View, Text, StyleProp, TextStyle } from 'react-native';
import colors from '../../../res/colors';
import styles from './styles';

type TextFieldProps = {
    titleStyle?:StyleProp<TextStyle>;
    title: string;
    style?: {};
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    editable?: boolean;
    returnKeyType?: any
};

const PrimaryTextField = ({
    titleStyle,
    title,
    style,
    value,
    onChangeText,
    placeholder,
    editable,
    returnKeyType,
    ...rest
}:TextFieldProps) => {

    return (
        <View style={{width:'100%',flexDirection:'column'}}>
            <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        <TextInput
            value={value}
            style={[styles.inputStyle, style]}
            onChangeText={(text) => onChangeText(text)}
            placeholder={placeholder}
            placeholderTextColor={colors.TEXT_PRIMARY_BLACK_70}
            editable={editable}
            returnKeyType={returnKeyType ? returnKeyType :"default"}
        />
        </View>
    )
}

export  { PrimaryTextField } ;