import React, { useState, useLayoutEffect, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../../src/constants/globalStyles";
import OrderItem from "../../src/components/OrderItem";
import { useSelector } from "react-redux";
import { selectUserData } from "../../src/store/userSlice";

type OrderProps = {
  id: string;
  image: string;
  name: string;
  brand: {
    name: string;
  };
  price: number;
};

const Orders = () => {
  const userData = useSelector(selectUserData);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}
    >
      <Text style={globalStyles.boldText}>Order history</Text>
      {userData.orders.length > 0 ? (
        <View>
          {userData.orders.map((order: OrderProps, index: number) => (
            <OrderItem key={`${order.id}-${index}`} {...order} />
          ))}
        </View>
      ) : (
        <Text style={globalStyles.text}>No orders placed yet!</Text>
      )}
    </ScrollView>
  );
};

export default Orders;
