// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countVal = screen.getByTestId('count');
  expect(countVal).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText(/\+/i);
  const countVal = screen.getByTestId('count');
  const expectedCountVal = parseInt(countVal.textContent + 1);
  fireEvent.click(incrementButton);
  expect(countVal).toHaveTextContent(expectedCountVal);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText(/\-/i);
  const countVal = screen.getByTestId('count');
  const expectedCountVal = parseInt(countVal.textContent - 1);
  fireEvent.click(decrementButton);
  expect(countVal).toHaveTextContent(expectedCountVal);
});
