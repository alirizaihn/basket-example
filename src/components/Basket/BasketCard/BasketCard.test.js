import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BasketCard from './BasketCard';
import BasketItem from '../BasketItem/BasketItem';

const mockBasketItems = [
  { id: 1, name: 'Item 1', price: 10.99, quantity: 2 },
  { id: 2, name: 'Item 2', price: 20.99, quantity: 1 },
];

describe('BasketCard component', () => {
  it('renders basket items correctly', () => {
    const { getByText } = render(<BasketCard basketItems={mockBasketItems} />);
    
    mockBasketItems.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(`${item.price}₺`)).toBeInTheDocument();
      expect(getByText(`${item.quantity}`)).toBeInTheDocument();
    });
  });
});

describe('BasketItem component', () => {
  it('renders item details and handles increase/decrease actions', () => {
    const mockItem = { id: 1, name: 'Test Item', price: 15.99, quantity: 3, decrease: jest.fn(), increase: jest.fn()  };
    const { getByText, getByTestId } = render(<BasketItem {...mockItem} />);
    
    expect(getByText(mockItem.name)).toBeInTheDocument();
    expect(getByText(`${mockItem.price}₺`)).toBeInTheDocument();
    expect(getByText(mockItem.quantity)).toBeInTheDocument();

    fireEvent.click(getByText('-')); // Decrease
    expect(mockItem.decrease).toHaveBeenCalled();

    fireEvent.click(getByText('+')); // Increase
    expect(mockItem.increase).toHaveBeenCalled();
  });
});
