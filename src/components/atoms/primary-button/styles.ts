import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles';

import colors from '../../../res/colors';

export default StyleSheet.create({
  text: {
    color: colors.TEXT_WHITE,
    textAlign: 'center',
    ...fonts.boldXXL
  },
  icon: {
    marginRight: 16
  },
  button: {
    height: 58,
    paddingHorizontal: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonBackgroundNormal: {
    backgroundColor: colors.JOLOCOM_PINK
  },
  buttonBackgroundDisabled: {
    backgroundColor: colors.JOLOCOM_PINK_DISABLED
  },
  titleDisabled: {
    color: colors.JOLOCOM_PINK_DISABLED,
    ...fonts.boldXXL
  },
  titleNormal: {
    color: colors.WHITE,
    ...fonts.boldXXL
  }
});
