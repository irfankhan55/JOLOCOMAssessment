import { NativeModules } from 'react-native';
import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
NativeModules.ReactLocalization = {
    language: 'en',
}
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);