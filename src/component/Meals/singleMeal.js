import React from 'react';
import {Link } from 'react-router-dom';
import './meals.css';

const SingleMeal = ({
    id, meal_name, category, mealInstruction, mealImage, youtube,  mealSource, area
  }) => {
    return (
        <div className="grid-flex">
            <Link to={`/meal/${id}`} >
            <div className="g-card-body">
                <img src={mealImage} className="imageSize"/>
                <p className="title">{ meal_name }</p><hr/>
                <ul className="listags">
                    <li>{ category }</li>
                    <li>{ area }</li>
                </ul>
                <div className="buttonLight">View Instructions</div>
            </div>
            </Link>
        </div>
    )
}

export default SingleMeal;