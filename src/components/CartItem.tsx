import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { globalStyles } from "../constants/globalStyles";

type CartItem = {
  id: string;
  image: string;
  name: string;
  brand: {
    name: string;
  };
  price: number;
};

type CartProps = {
  cartItem: CartItem;
  removeHandler: (id: string) => void;
  buyHandler: (id: string) => void;
};

const CartItem = (props: CartProps) => {
  const { cartItem, removeHandler, buyHandler } = props;
  const { id, image, name, brand, price } = cartItem;

  return (
    <View style={styles.card}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image source={{ uri: image }} style={styles.img} />
        <View>
          <Text style={globalStyles.boldText}>{brand.name}</Text>
          <Text style={globalStyles.text}>Price:- ${price}</Text>
        </View>
      </View>
      <Text style={globalStyles.text}>{name}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 10,
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            buyHandler(id);
          }}
          style={[styles.button, { backgroundColor: "green" }]}
        >
          <Text style={styles.text}>Buy Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            removeHandler(id);
          }}
          style={[styles.button, { backgroundColor: "#E53935" }]}
        >
          <Text style={styles.text}>Remove Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginVertical: 20,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 5,
    width: "40%",
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
