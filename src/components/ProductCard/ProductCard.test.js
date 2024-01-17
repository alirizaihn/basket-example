import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "./ProductCard";
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

test("renders product card with correct data", () => {
  const productData = {
    id: 1,
    name: "Test Product",
    price: 10,
    image: "https://loremflickr.com/640/480/abstract",
  };

  render(
    <MemoryRouter>
      <ProductCard data={productData} addToCard={jest.fn()} />
    </MemoryRouter>
  );

  // Check if the product information is rendered correctly
  expect(screen.getByAltText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("10₺")).toBeInTheDocument();

  // Check if the "Add to Cart" button is present
  expect(screen.getByText("Add to Cart")).toBeInTheDocument();
});

test('calls addToCard function when "Add to Cart" button is clicked', () => {
  const addToCardMock = jest.fn();
  const productData = {
    id: 1,
    name: "Test Product",
    price: 10,
    image: "https://loremflickr.com/640/480/abstract",
  };

  render(
    <MemoryRouter>
      <ProductCard data={productData} addToCard={addToCardMock} />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText("Add to Cart"));
  expect(addToCardMock).toHaveBeenCalledWith(productData);
 
});


