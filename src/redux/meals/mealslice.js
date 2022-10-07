import fetchRandMeals from './mealsdata';

const initialState = [];

// create action contants - This are calleds action types
const GET_MEAL = 'meals/GET_MEAL';
const GET_DETAILS = 'meals/GET_DETAILS';
const SEARCH_MEAL = 'meals/SEARCH_MEAL';

// Action Creators for the action constant
// ########## Action to to get meals ###############/
const getMeals = () => async (dispatch) => {
  const meals = await fetchRandMeals();
  dispatch({
    type: GET_MEAL,
    payload: meals,
  });
};

// ########## get meals deatils ###############/
const getMealDetails = (id) => ({
  type: GET_DETAILS,
  payload: id,
});

const searchMeals = (string) => ({
  type: SEARCH_MEAL,
  payload: string,
});

// Reducers that recieves the actions and updates the state
const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEAL:
      return action.payload;
    case GET_DETAILS:
      return [
        ...state.map((meal) => {
          if (meal.id === action.payload) {
            return meal;
          }
          return meal;
        }),
      ];
    case SEARCH_MEAL:
      return [
        ...state.filter((meal) => {
          if (meal.meal_name === action.payload) {
            return meal;
          }
          return meal;
        }),
      ];
    default:
      return state;
  }
};

export { getMeals, getMealDetails, searchMeals };
export default MealsReducer;
