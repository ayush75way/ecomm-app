import { View, Text, Button, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import TextField from "../src/components/TextField";
import CustomButton from "../src/components/CustomButton";
import { globalStyles } from "../src/constants/globalStyles";
import logo from "../src/assets/logo.png";
import { useDispatch } from "react-redux";
import { setUserData } from "../src/store/userSlice";
import { showToast, validateEmail } from "../src/utils/helpers";

type User = {
  id: string;
  email: string;
  password: string;
  cart: [];
  orders: [];
};
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const verifyUser = (users: User[]) => {
    const user = users.find(
      (user: User) => user.email === email && user.password === password
    );
    if (user) {
      dispatch(setUserData(user));
      return router.replace("/(tabs)/product");
    }
    showToast("Invalid details");
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      showToast("Wrong email entered");
      setEmail("");
      setPassword("");

      return;
    }
    fetch("http://${process.env.HOST_URL}/users")
      .then((res) => res.json())
      .then((data) => {
        verifyUser(data);
      });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={styles.img} source={logo} alt="Logo" />
      <Text style={globalStyles.boldText}>Sign in account</Text>
      <TextField
        value={email}
        label={"Email address"}
        placeholder="email@address.com"
        onChange={setEmail}
      />
      <TextField
        value={password}
        label={"Password"}
        placeholder="Password"
        onChange={setPassword}
      />
      <CustomButton label={"Sign in"} onPress={handleSubmit} />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
