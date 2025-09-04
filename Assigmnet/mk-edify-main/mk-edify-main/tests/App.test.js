import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App routing', () => {
  test('renders FrontPage at root path', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('renders AdminPortal at /admin path', () => {
    window.history.pushState({}, '', '/admin');
    render(<App />);
    expect(screen.getByText(/edify courses/i)).toBeInTheDocument();
  });
});


