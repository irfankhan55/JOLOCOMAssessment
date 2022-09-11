import { StyleSheet } from "react-native";
import colors from "../../../res/colors";
import { fonts } from "../../../res/styles";

export default StyleSheet.create({
    inputStyle:{
        color: colors.TEXT_PRIMARY_BLACK_70,
        borderWidth:1,
        borderRadius:5,
        borderColor: colors.BLACK,
        backgroundColor:colors.WHITE,
        padding:18,
        height:62,
        width:'100%',
        ...fonts.poppinsXL
    },
    titleStyle:{ 
        paddingVertical: 10,
        color: colors.TEXT_PRIMARY_BLACK_70,
        ...fonts.regularL
    }
})