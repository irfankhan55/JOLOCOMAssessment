import * as React from 'react';
import {
    StyleProp,
    ViewStyle,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native';

type KeyboardAwareViewProps = {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};

const KeyboardAwareView = ({ style, children, ...rest }: KeyboardAwareViewProps) => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 10 : 0
    return (
        <TouchableWithoutFeedback
            
            onPress={Keyboard.dismiss}
        >
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={keyboardVerticalOffset}
                style={[style, { height:'100%', justifyContent:'space-between', marginBottom: Platform.OS == 'ios' ? 30 : 0}]}
                contentContainerStyle={{justifyContent:'space-between'}}
            >
                {
                    children && children
                }
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export { KeyboardAwareView };