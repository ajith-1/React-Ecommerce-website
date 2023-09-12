// favoriteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    cards:[],
}

const favoriteSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
        const productId = action.payload;
        const index = state.cards.indexOf(productId);
        if (index !== -1) {
          state.cards.splice(index, 1);
        } else {
          state.cards.push(productId);
        }
      },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
