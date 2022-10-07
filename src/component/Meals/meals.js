/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeals } from '../../redux/meals/mealslice';
import { getCategory } from '../../redux/category/categorySlice';
import MealContainer from './mealsContainer';

import './meals.css';

const Meals = () => {
  const allMeals = useSelector((state) => state.meals);
  const [filtered, setFiltered] = useState([]);
  const category = useSelector((state) => state.category);
  const [cat, setCat] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allMeals.length) {
      dispatch(getMeals());
    }
  }, [allMeals.length]);

  useEffect(() => {
    if (!category.length) {
      dispatch(getCategory());
    }
    if (cat.length) {
      setFiltered(allMeals.filter((meal) => meal.category === cat));
    }
  }, [category.length]);

  const filteredMenu = allMeals.filter((meal) => meal.meal_name.toLowerCase().includes(filtered));

  const filteredCategory = allMeals.filter((meal) => meal.category === cat);

  // const handleFilter = filtered.length > 0 ? filteredMenu : filteredCategory;
  const handleFilter = cat.length && cat !== 'All' ? filteredCategory : filteredMenu;

  return (

    <div className="meals-bg">
      <div className="meal-header">
        <h1>Meals</h1>
        <input type="search" placeholder="Search Meal" value={filtered} onChange={(e) => setFiltered(e.target.value)} />
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="All">All Meals</option>
          {
                category.map((cat) => (<option key={cat.id} value={cat.meal_name}>{cat.meal_name}</option>))

                }
        </select>
      </div>

      {/* <p className="home-results">{filtered.length ? `Showing ${filtered.length} results` : `Showing ${allMeals.length} results`}</p> */}
      {

        handleFilter.length ? <MealContainer meals={handleFilter} /> : <MealContainer meals={allMeals} />
        }
    </div>
  );
};

export default Meals;
