import React from 'react';
import SingleMeal from './singleMeal';

const mealsContainer = ({ meals }) => (
  <div className="grid-container">
    {meals.map((ml) => (

      <SingleMeal
        key={ml.id}
        id={ml.id}
        meal_name={ml.meal_name}
        category={ml.category}
        mealInstruction={ml.mealInstruction}
        mealImage={ml.mealImage}
        youtube={ml.youtube}
        mealSource={ml.mealSource}
        area={ml.area}
      />

    ))}

  </div>
);

export default mealsContainer;
