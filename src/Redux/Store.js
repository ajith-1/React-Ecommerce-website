import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slice';
import favoriteReducer from './FavSlice';

export const store=configureStore({
    reducer:{
        cartData:cartReducer,
        favoriteData:favoriteReducer,
    }
});