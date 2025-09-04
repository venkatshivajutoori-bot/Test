import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FrontPage from '../src/components/FrontPage';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('FrontPage', () => {
  test('shows invalid alert for wrong credentials', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByPlaceholderText(/enter your username/i), 'notadmin');
    await userEvent.type(screen.getByPlaceholderText(/enter your password/i), 'bad');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(alertSpy).toHaveBeenCalledWith('Invalid credentials');
    alertSpy.mockRestore();
  });

  test('navigates to /admin when admin credentials are provided', async () => {
    render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByPlaceholderText(/enter your username/i), 'admin');
    await userEvent.type(screen.getByPlaceholderText(/enter your password/i), 'admin');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(mockNavigate).toHaveBeenCalledWith('/admin');
  });
});


