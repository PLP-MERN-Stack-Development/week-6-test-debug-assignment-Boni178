import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('renders input fields and submits bug', () => {
  const mockSubmit = jest.fn();
  render(<BugForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Bug title' } });
  fireEvent.click(screen.getByText(/report/i));

  expect(mockSubmit).toHaveBeenCalled();
});
