import { Link, useRouter } from "expo-router";
import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import { Button } from "@rneui/base";
import CustomButton from "../src/components/CustomButton";
import logo from "../src/assets/logo.png";
import { globalStyles } from "../src/constants/globalStyles";

const LoginPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={logo} alt="Logo" />
      <Text style={styles.text}>Welcome to the</Text>
      <Text style={globalStyles.boldText}>E-commerce App</Text>
      <View style={styles.btnContainer}>
        <CustomButton
          label="Sign in"
          onPress={() => {
            router.replace("/login");
          }}
        />
        <CustomButton
          label="Register account"
          onPress={() => {
            router.replace("/register");
          }}
        />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "40%",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  text: {
    fontSize: 25,
  },
  img: {
    width: 150,
    height: 150,
  },
});
