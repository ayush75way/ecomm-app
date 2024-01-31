import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  image: string;
  name: string;
  brand: {
    name: string;
  };
  price: number;
};
export interface UserState {
  allProducts: Product[];
  userData: any;
}

const initialState: UserState = {
  userData: null,
  allProducts: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state: any, action) => {
      state.userData = action.payload;
    },
    setAllProducts: (state: any, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const selectUserData = (state: any) => state.user.userData;
export const selectAllProducts = (state: any) => state.user.allProducts;
export const { setUserData, setAllProducts } = userSlice.actions;

export default userSlice.reducer;
