import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('paragraph displays from express api', () => {
  render(<App />);
  const pElement = screen.getByText(/API/)
  expect(pElement).toBeInTheDocument();
})
