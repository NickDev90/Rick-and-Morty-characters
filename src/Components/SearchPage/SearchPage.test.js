import { render, screen } from '@testing-library/react';
import SearchPage from './SearchPage';

it('renders search form', () => {
  render(<SearchPage />);
  const form = screen.getByRole('form');
  expect(form).toBeInTheDocument();
});
