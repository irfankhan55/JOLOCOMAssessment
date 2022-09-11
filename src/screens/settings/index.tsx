import * as React from 'react';
import { View } from 'react-native';
import  WebView  from 'react-native-webview';
import { IconImage, IconSets } from '../../components/atoms';
import styles from './styles';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
        <WebView
        source={{ uri: 'https://coinmarketcap.com/currencies/bitcoin/' }}
        style={{ marginTop: 20 }}
      />
   
    </View>
  );
};

export default SettingsScreen;
