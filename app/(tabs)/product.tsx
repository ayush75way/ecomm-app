import { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import ProductCard from "../../src/components/ProductCard";
import { globalStyles } from "../../src/constants/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, setAllProducts } from "../../src/store/userSlice";

type Product = {
  id: number;
  image: string;
  name: string;
  brand: {
    name: string;
  };
  price: number;
};

const HomePage = () => {
  const allProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const getAllProducts = () => {
    fetch("http://10.0.2.2:3000/products")
      .then((response) => response.json())
      .then((result) => {
        dispatch(setAllProducts(result));
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}
    >
      <Text style={globalStyles.boldText}>Products Listing</Text>
      {allProducts.length > 0 &&
        allProducts.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </ScrollView>
  );
};

export default HomePage;
