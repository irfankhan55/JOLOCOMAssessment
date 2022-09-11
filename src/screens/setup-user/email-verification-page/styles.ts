import { StyleSheet } from 'react-native';
import colors from "../../../res/colors";

export default StyleSheet.create({
    continueButton:{
      width:'100%'
    },
    container: {
      flex: 1,
      backgroundColor: colors.JOLOCOM_PRIMARY_WHITE,
      justifyContent: 'space-between',
      padding:24
    },
    contentView: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },

  });