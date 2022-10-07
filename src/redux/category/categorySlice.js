import { getCategoryMeals } from '../meals/mealsdata';

const initialCat = [];
const GET_CATEGORY = 'meals/category/GET_CATEGORY';

  // ########## Action to to get category ###############/
  const getCategory = () => async (dispatch) => {
    const categories = await getCategoryMeals();
    dispatch({
      type: GET_CATEGORY,
      payload: categories,
    });
  };
  

   // Reducers that recieves the actions and updates the state
const categoryReducer = (state = initialCat, action) => {
    switch (action.type) {
        case GET_CATEGORY:
          return action.payload;
      default:
        return state;
    }
  };
  
export { getCategory };
export default categoryReducer;