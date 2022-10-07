/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../redux/category/categorySlice';

import './category.css';

const Category = () => {
  const category = useSelector((state) => state.category);
  // const [cat, setCat] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!category.length) {
      dispatch(getCategory());
    }
  }, [category.length]);

  return (

    <div className="meals-bg">
      <div className="category-header">
        <h1>Categories</h1>
        <br />
        <hr />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Image</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {category.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.meal_name}</td>
                <td><img src={cat.category} className="imageCategory" alt={meal_name} /></td>
                <td className="formated">{cat.description}</td>
              </tr>
            )) }
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Category;
