import { StyleSheet } from 'react-native';
import colors from '../../res/colors';
import { fonts } from '../../res/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.JOLOCOM_PRIMARY_WHITE
  },
  contentView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueButton:{
    marginTop:30,
    backgroundColor:colors.JOLOCOM_PINK,
    width:'100%'
  },
});

export default styles;
