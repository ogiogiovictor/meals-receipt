import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./meals/mealslice";

const store = configureStore({
    reducer: {
      meals: mealsReducer,
    },
  });
  
  export default store;