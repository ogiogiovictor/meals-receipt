import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './meals/mealslice';
import categoryReducer from './category/categorySlice';

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    category: categoryReducer,
  },
});

export default store;
