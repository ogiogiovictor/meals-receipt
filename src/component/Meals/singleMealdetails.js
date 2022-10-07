import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './singlemeal.css';

const SingleMealDetails = ({id, meal_name, category, area, mealInstruction, ingredients,
mealImage, mealSource, soup, youtube}) => {

    return (
        <Fragment>
        <div className="details">
            <div class="image">
                <img src={mealImage} className="meal-image" /> 
                
            </div>
            <div className="mealitems">
                <div>Meal Name: <b> {meal_name} </b></div>
                <div>Category: <b>  {category} </b></div>
                <div>Country: <b>  {area} </b></div>
                <hr/>
                <h4>Meal Instruction</h4>
                <div className="instructions">{mealInstruction}</div>
                <h4>Meal Ingredients</h4><hr/>
                <ul>
                {
                     ingredients.map((ing) => (
                         <li>{ing}</li>
                     ))

                }
                </ul>

                <span classNAme="moreLink">More Info Visit</span> <a href={mealSource} target="_blank">View Source</a>
               
            </div>
        </div>

        <div className="player-wrapper">
             <ReactPlayer url={youtube} 
             className='react-player'
          playing />
        </div>
        </Fragment>
    );
}

export default SingleMealDetails;