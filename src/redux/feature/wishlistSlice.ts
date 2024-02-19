import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: number;
  title?: string;
  description?: string;
  thumbnail?: string;
  price?: number;
}

interface WishlistState {
  wishlist: WishlistItem[];
}

const initialState: WishlistState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const { id, title, description, thumbnail, price } = action.payload;
      if (!state.wishlist.some((item) => item.id === id)) {
        state.wishlist.push({ id, title, description, thumbnail, price });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
export const selectItemsInWishlist = createSelector(
  (state: { wishlist: WishlistState }) => state.wishlist.wishlist,
  (wishlist) => wishlist.length
);
export const getWishlist = createSelector(
  (state: { wishlist: WishlistState }) => state.wishlist.wishlist,
  (wishlist) => wishlist
);
