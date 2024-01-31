import { Stack, useRouter } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

const StackLayout = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#10101E",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="login"
          options={{
            headerTitle: "Signin screen",
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerTitle: "Register screen",
          }}
        />
      </Stack>
    </Provider>
  );
};

export default StackLayout;
