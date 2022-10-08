/* eslint-disable */
import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import { PropTypes } from 'prop-types';
import './singlemeal.css';

const SingleMealDetails = ({
  id, meal_name, category, area, mealInstruction, ingredients,
  mealImage, mealSource, soup, youtube,
}) => (
  <>
    <div className="details">
      <div className="image">
        <img src={mealImage} className="meal-image" alt={id} />

      </div>
      <div className="mealitems">
        <div>
          Meal Name:
          <b>
            {' '}
            {meal_name}
            {' '}
          </b>
        </div>
        <div>
          Category:
          <b>
            {' '}
            {category}
            {' '}
          </b>
        </div>
        <div>
          Country:
          <b>
            {' '}
            {area}
            {' '}
          </b>
        </div>
        <hr />
        <h4>Meal Instruction</h4>
        <div className="instructions">{mealInstruction}</div>
        <h4>Meal Ingredients</h4>
        <hr />
        <ul>
          {
                     ingredients.map((ing) => (
                       <li>{ing}</li>
                     ))

                }
        </ul>

        <span className="moreLink">
          More Info Visit -
          {soup}
        </span>
        {' '}
        <a href={mealSource} target="_blank" rel="noreferrer">View Source</a>

      </div>
    </div>

    <div className="player-wrapper">
      <ReactPlayer
        url={youtube}
        className="react-player"
        playing
      />
    </div>
  </>
);

SingleMealDetails.propTypes = {
  id: PropTypes.string.isRequired,
  meal_name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mealInstruction: PropTypes.bool.isRequired,
  mealImage: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  mealSource: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  soup: PropTypes.string.isRequired,
};

export default SingleMealDetails;
