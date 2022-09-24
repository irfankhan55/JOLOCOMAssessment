import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles';
import colors from "../../../res/colors";


export default StyleSheet.create({
    headerStyle:{
      flex:1,
     
      backgroundColor:'red',
    },

    headerTitleText:{
      flex:1,
      height:'100%',
      textAlign: 'center',
      color:'white', 
      marginRight:20 ,
      ...fonts.boldXXL,
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