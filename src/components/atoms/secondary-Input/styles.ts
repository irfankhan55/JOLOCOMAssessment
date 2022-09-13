import { StyleSheet } from "react-native";
import colors from "../../../res/colors";
import { fonts } from "../../../res/styles";

export default StyleSheet.create({
    label: {
        backgroundColor:'red',
        height:100,
        marginVertical: 5,
        fontSize: 14,
        color: 'green',
      },
      inputContainer: {
        marginVertical:10,
        height: 55,
        borderRadius: 5,
        backgroundColor: colors.JOLOCOM_PRIMARY_INPUT_BG,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
      },
})