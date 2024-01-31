import React, { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import { globalStyles } from "../../src/constants/globalStyles";
import CartItem from "../../src/components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from "../../src/store/userSlice";
import { saveUserToDB } from "../../src/services/userAPI";

type Cart = {
  id: string;
  image: string;
  name: string;
  brand: {
    name: string;
  };
  price: number;
};

const Cart = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [cartItems, setCartItems] = useState([]);

  const removeHandler = async (id: string) => {
    const newCartItems = [...userData.cart].filter((item) => item.id !== id);
    const updatedUserData = { ...userData, cart: [...newCartItems] };
    saveUserToDB({
      userId: userData.id,
      updatedUserData: updatedUserData,
      message: "Item removed from cart!",
    });
    dispatch(setUserData(updatedUserData));
  };
  const buyHandler = async (id: string) => {
    const boughtItem = [...userData.cart].find((obj) => obj.id === id);
    const newCartItems = [...userData.cart].filter((item) => item.id !== id);
    const updatedUserData = {
      ...userData,
      cart: [...newCartItems],
      orders: [...userData.orders, boughtItem],
    };

    saveUserToDB({
      userId: userData.id,
      updatedUserData: updatedUserData,
      message: "Item bought successfully!",
    });
    dispatch(setUserData(updatedUserData));
  };

  useEffect(() => {
    if (userData) {
      setCartItems(userData.cart);
    }
  }, [userData]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}
    >
      <Text style={globalStyles.boldText}>Your cart</Text>
      {cartItems.length > 0 ? (
        cartItems.map((item: Cart, index) => (
          <CartItem
            key={index}
            buyHandler={buyHandler}
            removeHandler={removeHandler}
            cartItem={item}
          />
        ))
      ) : (
        <Text style={globalStyles.text}>Cart is empty</Text>
      )}
    </ScrollView>
  );
};

export default Cart;
