import fetchRandMeals from './mealsdata';

const initialState = [];

// create action contants - This are calleds action types
const GET_MEAL = 'meals/GET_MEAL';
const GET_DETAILS = 'meals/GET_DETAILS';

// Action Creators for the action constant
// ########## Action to to get Rockets ###############/
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
      default:
        return state;
    }
  };
  

  export { getMeals, getMealDetails };
export default MealsReducer;