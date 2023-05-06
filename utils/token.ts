import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('@jwt_token', value);
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    // saving error
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@jwt_token');
    if (value !== null) {
      // value previously stored
    }
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    // error reading value
  }
};
