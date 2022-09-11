import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles';
import colors from "../../../res/colors";

export default StyleSheet.create({
    countryPickerStyle:{
        color: colors.TEXT_PRIMARY_BLACK_70,
        justifyContent:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor: colors.BLACK,
        backgroundColor:colors.WHITE,
        height:62,
        paddingHorizontal:10,
        width:'100%',
        ...fonts.poppinsXL
    },
      inputStyle:{
        color: colors.TEXT_PRIMARY_BLACK_70,
        borderWidth:1,
        borderRadius:5,
        borderColor: colors.BLACK,
        backgroundColor:colors.WHITE,
        padding:18,
        height:62,
        marginHorizontal:20,
        width:'90%',
        ...fonts.poppinsXL
    },
    countryPickerTitle:{
        textAlign:'center', 
        marginTop: 20,
        ...fonts.boldXXL
    },
    container: {
      flex: 1,
      backgroundColor: colors.JOLOCOM_PRIMARY_WHITE,
      padding:24
    },
    titleStyle:{ 
        paddingVertical: 10,
        color: colors.TEXT_PRIMARY_BLACK_70,
        ...fonts.regularL
    }
  });