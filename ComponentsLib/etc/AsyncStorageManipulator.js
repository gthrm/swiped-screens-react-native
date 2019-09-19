import { AsyncStorage } from 'react-native';

export const _dataToStore = async (key, value) => {
  // console.log('******************************************** key, value: ', key, value);
  if (value !== undefined) {
    try {
      await AsyncStorage.setItem(`${key}`, value);
    } catch (error) {
      // Error saving data
    }
  }
};

export const _retrieveData = async key => {
  // console.log('******************************************** key: ', key);
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // console.log(data+': ', value);
      // console.log(typeof value);

      return value;
    } else {
      return undefined;
    }
  } catch (error) {
  }
};
