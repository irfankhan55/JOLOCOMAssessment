import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';
import styles from './styles';
import { IconImage } from '../icon-image';
import Colors from '../../../res/colors';

interface PrimaryButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  icon?: string;
  iconSet?: string;
  title: string;
  disabled?: boolean;
}

const PrimaryButton = ({
  onPress,
  titleStyle,
  title,
  icon,
  iconSet,
  style,
  disabled = false
}: PrimaryButtonProps) => {
  const backgroundStyle = disabled
    ? styles.buttonBackgroundDisabled
    : styles.buttonBackgroundNormal;

    const titleSyle = disabled
    ? styles.titleDisabled
    : styles.titleNormal;
  return (
    <TouchableOpacity
      style={[styles.button, backgroundStyle, style]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon ? (
        <IconImage
          name={icon}
          iconSet={iconSet}
          iconStyle={styles.icon}
          color={Colors.WHITE}
        />
      ) : null}
      <Text style={[titleSyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

PrimaryButton.defaultProps = {
  style: {},
  icon: null,
  iconSet: null
};

export { PrimaryButton };
