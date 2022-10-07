import React from 'react';

import './about.css';

const About = () => (

  <div className="meals-bg">
    <div className="category-header">
      <h1>About</h1>
      <br />
      <hr />
      <p>API - The Meals DB</p>
      <ul className="aboutList">
        <li><b>Search meal by name</b></li>
        <li>www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</li>
        <li><b>List all meals by first letter</b></li>
        <li>www.themealdb.com/api/json/v1/1/search.php?f=a</li>
        <li><b>Lookup full meal details by id</b></li>
        <li>www.themealdb.com/api/json/v1/1/lookup.php?i=52772</li>
        <li><b>List all meal categories</b></li>
        <li>www.themealdb.com/api/json/v1/1/categories.php</li>

      </ul>
    </div>

  </div>
);

export default About;
