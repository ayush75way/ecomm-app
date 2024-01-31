import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import TextField from "../src/components/TextField";
import { globalStyles } from "../src/constants/globalStyles";
import logo from "../src/assets/logo.png";
import CustomButton from "../src/components/CustomButton";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { showToast, validateEmail } from "../src/utils/helpers";
import { setUserData } from "../src/store/userSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      showToast("Wrong email entered");
      return;
    }
    if (!(password === confirmPassword && password != "")) {
      showToast("Passwords should match");
      return;
    }
    fetch("http://${process.env.HOST_URL}/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        cart: [],
        orders: [],
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        return res.json();
      })
      .then((data) => {
        dispatch(setUserData(data));
        showToast("Registeration successful");
        return router.replace("/(tabs)/product");
      })
      .catch((error) => {
        console.error("Registration failed:", error.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={styles.img} source={logo} alt="Logo" />
      <Text style={globalStyles.boldText}>Register account</Text>
      <TextField
        value={email}
        label={"Email address"}
        placeholder="email@address.com"
        onChange={setEmail}
      />
      <TextField
        value={password}
        label={"Password"}
        placeholder="password"
        onChange={setPassword}
      />
      <TextField
        value={confirmPassword}
        label={"Confirm Password"}
        placeholder="password"
        onChange={setConfirmPassword}
      />
      <CustomButton label={"Register"} onPress={handleSubmit} />
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
