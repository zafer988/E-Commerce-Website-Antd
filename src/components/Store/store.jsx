import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../../Slice/ProductGetThunk';
import CartReducer from '../../Slice/CartSlice';

const store = configureStore({
    reducer: {
        product: ProductReducer,
        cart: CartReducer
    }
})
export default store