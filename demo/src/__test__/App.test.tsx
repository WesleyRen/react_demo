import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs.length).toEqual(6);
  expect(tabs[0]).toHaveTextContent("Snippet");
  expect(tabs[1]).toHaveTextContent("by boxing");
  expect(tabs[2]).toHaveTextContent("by padding");
  expect(tabs[3]).toHaveTextContent("File Tree");
  expect(tabs[4]).toHaveTextContent("Todo");
  expect(tabs[5]).toHaveTextContent("HOC");
});
