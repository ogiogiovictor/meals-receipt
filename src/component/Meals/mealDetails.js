import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleMealDetails from './singleMealdetails';
import './singlemeal.css';

const MealDetails = () => {
    //const { id } = useParams();
    const params = useParams();
    const meals = useSelector((state) => state.meals);
    const findmeals = meals.find((meal) => meal.id === params.id);
    console.log(findmeals);

    return (
    <div className="meals-bg">
        <h1 className="meal-details">Meal Details</h1>
        <SingleMealDetails      
                key={findmeals.id}
                id={findmeals.id}
                meal_name={findmeals.meal_name}
                category={findmeals.category}
                mealInstruction={findmeals.mealInstruction}
                mealImage={findmeals.mealImage}
                youtube={findmeals.youtube}
                mealSource={findmeals.mealSource}
                area={findmeals.area} 
                ingredients={findmeals.ingredients} 
                soup={findmeals.soup} 
                
                />
    </div>
    );
}

export default MealDetails;