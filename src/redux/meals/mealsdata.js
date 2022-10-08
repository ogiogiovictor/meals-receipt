/* eslint-disable */
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const cat = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const mealInsgredients = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }
  return ingredients;
  // console.log(ingredients);
};

const dataMap = (data) => {
  const mealsData = data.meals.map((meal) => ({
    id: meal.idMeal,
    meal_name: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    mealInstruction: meal.strInstructions,
    mealImage: meal.strMealThumb,
    youtube: meal.strYoutube,
    mealSource: meal.strSource,
    soup: meal.strTags,
    ingredients: mealInsgredients(meal),
  }));
  return mealsData;
};

// Async Slice Drage Data
const fetchRandMeals = async (string) => {
  if (string) {
    const response = await fetch(`${url}+${string}`);
    const data = await response.json();
    const mealsData = dataMap(data);
    return mealsData;
  }
  const response = await fetch(url);
  const data = await response.json();
  const mealsData = dataMap(data);
  return mealsData;
};

const getCategoryMeals = async () => {
  const response = await fetch(cat);
  const data = await response.json();
  const categoryMeal = data.categories.map((meal) => ({
    id: meal.idCategory,
    meal_name: meal.strCategory,
    category: meal.strCategoryThumb,
    description: meal.strCategoryDescription,
  }));
  return categoryMeal;
};

export { getCategoryMeals };
export default fetchRandMeals;
