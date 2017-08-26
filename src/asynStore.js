import { AsyncStorage } from 'react-native';

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (e) {
        console.log("Can't set item AsynStorage", e);
    }
};

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (e) {
        console.log("Can't remove item AsynStorage", e);
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return JSON.parse(token);
    } catch (e) {
        console.log("Can't get item AsynStorage", e);
    }
};
