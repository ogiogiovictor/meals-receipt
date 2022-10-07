/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './meals.css';

const SingleMeal = ({
  id, meal_name, category, mealInstruction, mealImage, youtube, mealSource, area,
}) => (
  <div className="grid-flex">
    <Link to={`/meal/${id}`}>
      <div className="g-card-body">
        <img src={mealImage} className="imageSize" alt={meal_name} />
        <p className="title">{ meal_name }</p>
        <hr />
        <ul className="listags">
          <li>{ category }</li>
          <li>{ area }</li>
        </ul>
        <div className="buttonLight">View Instructions</div>
      </div>
    </Link>
  </div>
);

SingleMeal.propTypes = {
  id: PropTypes.string.isRequired,
  meal_name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mealInstruction: PropTypes.bool.isRequired,
  mealImage: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  mealSource: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default SingleMeal;
