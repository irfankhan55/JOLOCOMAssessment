import AsyncStorage from '@react-native-async-storage/async-storage';

const getStringValue = async (key: string): Promise<string> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getObjectValue = async (key: string): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const setStringValue = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const setObjectValue = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
    return null;
  }
};
const setUserLanguage = (token: string): Promise<void> => {
  return setStringValue('language', token);
};
const getUserLanguage = (): Promise<string> => {
  return getStringValue('language');
};

const setUserEmail = (userInitials: string): Promise<void> => {
  return setStringValue('userEmail', userInitials);
};

const getUserEmail = (): Promise<string> => {
  return getStringValue('userEmail');
};

/**
 * It will clear all data except ignored one to keep tracking of them
 */
const clear = async (): Promise<void> => {
  await AsyncStorage.removeItem('language');
  await AsyncStorage.removeItem('userEmail');
};

export default {
  getUserLanguage,
  setUserLanguage,
  getUserEmail,
  setUserEmail,
  clear
};
