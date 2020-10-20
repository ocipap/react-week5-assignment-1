import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../__fixtures__/categories';

import CategoriesContainer from './CategoriesContainer';

import { selectCategory } from './actions';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { container, getByText } = render((
    <CategoriesContainer />
  ));

  categories.forEach(({ id, name }) => {
    expect(container).toHaveTextContent(name);

    fireEvent.click(getByText(name));

    expect(dispatch).toBeCalledWith(selectCategory(id));
  });
});
