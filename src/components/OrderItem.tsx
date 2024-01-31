import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../constants/globalStyles";

type OrderProps = {
  id: string;
  image: string;
  name: string;
  brand: {
    name: string;
  };
  price: number;
};

const OrderItem = (props: OrderProps) => {
  const { brand, name, image, price } = props;
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
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={globalStyles.text}>Status</Text>
        <View style={styles.statusContainer}>
          <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
            Dispatched
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

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
  statusContainer: {
    padding: 5,
    paddingHorizontal: 20,
    backgroundColor: "orange",
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
