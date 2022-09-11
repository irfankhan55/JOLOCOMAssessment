import * as React from 'react';
import {
  Image,
  StyleProp,
  ImageStyle,
  TouchableOpacityProps,
  TouchableOpacity
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from '../../../res/icons';

enum IconSets {
  FONT_AWESOME = 'FONT_AWESOME',
  MATERIAL = 'MATERIAL',
  MATERIAL_COMMUNITY = 'MATERIAL_COMMUNITY',
  FOUNDATION = 'FOUNDATION',
  IONICONS = 'IONICONS',
  JOLOCOM_ICON = 'JOLOCOM_ICON',
  JOLOCOM_PICTOGRAM = 'JOLOCOM_PICTOGRAM',
  LOCAL_ICON = 'LOCAL_ICON'
}

const _getIconSet = (iconSet: IconSets | string) => {
  switch (iconSet) {
    case IconSets.FONT_AWESOME: {
      return FontAwesome;
    }
    case IconSets.MATERIAL: {
      return MaterialIcons;
    }
    case IconSets.MATERIAL_COMMUNITY: {
      return MaterialCommunityIcons;
    }
    case IconSets.FOUNDATION: {
      return Foundation;
    }
    case IconSets.IONICONS: {
      return Ionicons;
    }
    default:
      return MaterialIcons;
  }
};

type IconImageProps = {
  iconSet: IconSets | string;
  size?: number;
  name: string;
  color?: string;
  iconStyle?: StyleProp<ImageStyle>;
};

const IconImage = ({
  iconSet,
  name,
  iconStyle,
  size,
  color
}: IconImageProps) => {
  if (iconSet === IconSets.LOCAL_ICON) {
    const sizeStyle = size ? { width: size, height: size } : {};
    return (
      <Image
        source={Icons[name]}
        style={[iconStyle, sizeStyle]}
        resizeMode="contain"
      />
    );
  } else {
    const Icon = _getIconSet(iconSet);
    const colorStyle = color ? { color } : {};
    const iconSize = size ? size : 24;
    return <Icon name={name} size={iconSize} style={[iconStyle, colorStyle]} />;
  }
};

const IconImageTouchable = (props: IconImageProps & TouchableOpacityProps) => {
  const { iconSet, name, iconStyle, size, color, onPress, ...rest } = props;
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <IconImage
        iconSet={iconSet}
        name={name}
        iconStyle={iconStyle}
        size={size}
        color={color}/>
    </TouchableOpacity>
  );
};

export { IconImage, IconImageTouchable, IconSets };
