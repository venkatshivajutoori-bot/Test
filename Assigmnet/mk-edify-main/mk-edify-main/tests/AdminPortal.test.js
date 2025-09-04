import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminPortal from '../src/components/AdminPortal';

describe('AdminPortal', () => {
  test('renders title and all course cards', () => {
    render(
      <MemoryRouter>
        <AdminPortal />
      </MemoryRouter>
    );

    expect(screen.getByText(/edify courses/i)).toBeInTheDocument();

    const courses = [
      'AWS',
      'Azure',
      'DevOps',
      'AI',
      'ML Ops',
      'Python',
      'Data Engg',
      'Java',
      'ReactJS',
    ];

    courses.forEach((course) => {
      expect(screen.getByText(course)).toBeInTheDocument();
    });

    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
  });
});


