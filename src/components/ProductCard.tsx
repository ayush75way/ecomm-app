import { TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import { globalStyles } from "../constants/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from "../store/userSlice";
import { saveUserToDB } from "../services/userAPI";
type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  brand: {
    name: string;
  };
  price: number;
};

const ProductCard = (props: ProductCardProps) => {
  const { name, image, brand, price } = props;
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const addToCartHandler = async () => {
    const newItem = { ...props };
    const updatedUserData = { ...userData, cart: [...userData.cart, newItem] };
    saveUserToDB({
      userId: userData.id,
      updatedUserData: updatedUserData,
      message: "Item added to cart!",
    });
    dispatch(setUserData(updatedUserData));
  };

  return (
    <Card style={{ marginVertical: 20 }}>
      <Card.Title title={brand.name} titleStyle={globalStyles.text} />
      <Card.Content>
        <Text style={globalStyles.boldText}>${price}</Text>
        <Text style={globalStyles.text} variant="bodyMedium">
          {name}
        </Text>
      </Card.Content>
      <Card.Cover source={{ uri: image }} />
      <Card.Actions>
        <TouchableOpacity
          onPress={addToCartHandler}
          style={globalStyles.button}
        >
          <FontAwesome5 name="plus" color={"#fff"} />
          <Text style={[globalStyles.text, { color: "#fff" }]}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

export default ProductCard;
