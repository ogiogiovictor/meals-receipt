import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/header';
import Meals from './component/Meals/meals';
import Footer from './component/Footer/footer';
import MealDetails from './component/Meals/mealDetails';

import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="container">
      <Header />
      <Routes>
            <Route exact path="/" element={<Meals />} />
            <Route exact path="/meal/:id" element={<MealDetails />} />
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
