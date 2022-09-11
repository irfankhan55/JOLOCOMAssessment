import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles/font';
import colors from "../../../res/colors";

export default StyleSheet.create({
    titleText: {
        width:'100%',
        textAlign:'center',
        color: colors.JOLOCOM_PINK,
        marginVertical: 30,
        ...fonts.poppinsXXXL
      },

    mainTitle:{
      width:'65%', 
      textAlign:'center',
      color:'white', 
      fontSize: 18, 
      marginVertical: 30,
      ...fonts.boldXXL,
    },
    continueButton:{
      marginTop:30,
      backgroundColor:colors.JOLOCOM_PINK,
      width:'100%'
    },
    container: {
      flex: 1,
      backgroundColor: colors.JOLOCOM_PRIMARY,
      justifyContent: 'flex-start',
      alignItems: "center",
      paddingTop: 70
     
    }
  });