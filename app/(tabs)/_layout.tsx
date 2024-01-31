import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#560CCE",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 15,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="product"
        options={{
          tabBarLabel: "Products",
          headerTitle: "Product Screen",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={"#560CCE"} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          headerTitle: "My Cart",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" size={size} color={"#560CCE"} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: "Orders",
          headerTitle: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="history" size={size} color={"#560CCE"} />
          ),
        }}
      />
    </Tabs>
  );
};
