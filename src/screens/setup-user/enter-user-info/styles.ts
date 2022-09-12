import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles';
import colors from "../../../res/colors";


export default StyleSheet.create({
    headerStyle:{
      backgroundColor: colors.JOLOCOM_PRIMARY_WHITE,
    },

    headerTitleText:{
      flex:1,
      lineHeight:25,
      textAlign:'center',
      color:'white', 
      fontSize: 18, 
      paddingTop:10,
      marginRight: 30,
      ...fonts.robotoXXXL,
    },

    continueButton:{
      flexDirection:'column',
      marginTop:30,
      width:'100%'
    },
    container: {
      flex:1,
      backgroundColor: colors.JOLOCOM_PRIMARY_WHITE,
      padding:24,
    },

  });