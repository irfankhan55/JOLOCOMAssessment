import * as React from 'react';
import { View } from 'react-native';
import { IconImage, IconSets } from '../../components/atoms';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <IconImage name={'logo'} iconSet={IconSets.LOCAL_ICON} />
      </View>
    </View>
  );
};

export default HomeScreen;
