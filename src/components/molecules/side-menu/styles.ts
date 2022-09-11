import { StyleSheet } from 'react-native';
import colors from "../../../res/colors";

export default StyleSheet.create({
  box: {
    flex: -1,
    width: 64,
    backgroundColor: 'Black',
    height: '100%'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.JOLOCOM_PRIMARY,
    width: 64,
    height: 50,
    justifyContent: 'center',
    borderLeftColor: 'rgb(59, 73, 86)',
    borderLeftWidth: 4,
    marginTop: 26
  },
  menuItemSelected: {
    backgroundColor: 'rgb(86, 100, 112)',
    borderLeftColor: '#4099DA',
    borderLeftWidth: 4
  },
  logoStyle: { marginTop: 20, marginBottom: 10 },
  menuContainer: {
    backgroundColor: colors.JOLOCOM_PRIMARY,
    alignItems: 'center',
    justifyContent:'center',
    flex: 1
  },
  menuItemsContainer: {
    marginTop: 0
  }
});
