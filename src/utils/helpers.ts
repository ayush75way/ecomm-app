import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

type User = {
  id: string;
  email: string;
  password: string;
  cart: [];
  orders: [];
};

export const storeUser = async (user: User) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const showToast = (message: string) => {
  ToastAndroid.show(message, 1000);
};
