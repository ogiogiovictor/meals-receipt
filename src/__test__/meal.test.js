import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Meals from '../component/Meals/Meals';

const TestRenderer = require('react-test-renderer');

it('Renders meals correctly', () => {
  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <Meals />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});