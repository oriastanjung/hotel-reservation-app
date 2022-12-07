import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@token";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    // saving error
  }
};
const getData = async (data) => {
  try {
    const jsonValue = await AsyncStorage.getItem(data);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const removeData = async (key) => {
  try {
    const value = await AsyncStorage.removeItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
export { getData, STORAGE_KEY, storeData, removeData };
