import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles';
import colors from "../../../res/colors";


export default StyleSheet.create({
  mainContainer: {
    flex: 1, backgroundColor: colors.JOLOCOM_PRIMARY 
  },
    headerStyle:{
      backgroundColor: 'green',
    },

    headerTitleText:{
      width:'65%', 
      textAlign:'center',
      color:'white', 
      fontSize: 18, 
      ...fonts.robotoXXXL,
    },

    continueButton:{
      alignSelf:'center',
      flexDirection:'column',
      marginVertical:20,
      width:'80%'
    },

    startOverButton:{
      backgroundColor:colors.JOLOCOM_PRIMARY_INPUT_BG,
      flexDirection:'column',
      marginTop:10,
      width:'100%'
    },

    container: {
      flex:1,
      marginHorizontal: 2,
      // backgroundColor: colors.JOLOCOM_PRIMARY_WHITE,
   
    },

  });