import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/header';
import Meals from './component/Meals/meals';
import Footer from './component/Footer/footer';
import MealDetails from './component/Meals/mealDetails';
import Category from './pages/category/category';
import About from './pages/about/about';

import './App.css';

const App = () => (
  <div className="container-fluid">
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Meals />} />
        <Route exact path="/meal/:id" element={<MealDetails />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

export default App;
