import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Category from '../pages/category/category';

const TestRenderer = require('react-test-renderer');

it('Renders meals correctly', () => {
  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <Category />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
