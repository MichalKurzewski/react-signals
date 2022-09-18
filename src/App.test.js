import { render, screen } from '@testing-library/react';
import App from './App';

test('hello world', () => {
  render(<App />);
  const hello = screen.getByText("Hello World");
  expect(hello).toBeInTheDocument();
});
