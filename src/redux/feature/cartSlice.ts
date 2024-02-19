import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ProductType {
  id: number;
  quantity: number;
  unitPrice: number;
  totalPrice?: number;
  title?: string;
  description?: string;
  thumbnail?: string;
  price?: number;
}

interface CartState {
  cart: ProductType[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      const { id, quantity, unitPrice } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity || 1;
        existingItem.totalPrice =
          existingItem.quantity * (existingItem.unitPrice ?? 0);
      } else {
        state.cart.push({
          id,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          quantity: quantity || 1,
          unitPrice: unitPrice ?? action.payload.price,
          totalPrice:
            (quantity || 1) * (unitPrice ?? action.payload.price ?? 0),
          thumbnail: action.payload.thumbnail,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * (item.unitPrice ?? 0);
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          item.totalPrice = item.quantity * item.unitPrice;
        } else {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.id !== action.payload
          );
        }
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

interface GlobalState {
  cart: CartState;
}

export const getCart = (state: { cart: CartState }) => state.cart.cart;

export const getTotalCartQuantity = (state: { cart: CartState }) =>
  state.cart.cart.reduce(
    (sum, item) => sum + (Number.isFinite(item.quantity) ? item.quantity : 0),
    0
  );

export const getTotalCartPrice = (state: { cart: CartState }) =>
  state.cart.cart.reduce((sum, item) => sum + (item.totalPrice ?? 0), 0);

export const getCurrentQuantityById =
  (id: number) => (state: { cart: CartState }) =>
    state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
