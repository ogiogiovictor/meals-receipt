import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeals } from '../../redux/meals/mealslice';
import MealContainer from './mealsContainer';

import './meals.css';

const Meals = () => {

  const allMeals = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allMeals.length) {
      dispatch(getMeals());
    }
  }, [allMeals.length]);


    return (
    <div className="meals-bg">
        <h1>Meals</h1>

        {
            allMeals.length ? <MealContainer meals={allMeals} /> : <p>No Meals Found...</p>
        }
    </div>
    );
}

export default Meals;