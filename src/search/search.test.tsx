import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Search } from "./Search"; // Replace with the correct path to your Search component
import '@testing-library/jest-dom';

describe("Search component", () => {
  it("renders the Search component", () => {
    const mockOnSearchChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Search onSearchChange={mockOnSearchChange} />
    );

    // Check if the input element is present
    const searchInput = getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();
  });

  it("triggers the onSearchChange function on input change", () => {
    const mockOnSearchChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Search onSearchChange={mockOnSearchChange} />
    );

    // Simulate input change
    const searchInput = getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "sample text" } });

    // Expect that the onSearchChange function is called
    expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
  });
});
