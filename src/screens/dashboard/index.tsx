import * as React from 'react';
import { View } from 'react-native';
import Strings from '../../res/i18n';
import { IconImage, IconSets, PrimaryButton } from '../../components/atoms';
import styles from './styles';
import colors from '../../res/colors';
import { logout } from '../../store/authentication/actions';
import { useDispatch } from 'react-redux';
const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <IconImage name={'logo'} iconSet={IconSets.LOCAL_ICON} />
        <PrimaryButton
                title={Strings.logout}
                onPress={() =>{
                    dispatch(logout());
                }
                }
                style={styles.continueButton}
                titleStyle={{ color: colors.JOLOCOM_PRIMARY }}
            />
      </View>
    </View>
  );
};

export default HomeScreen;
