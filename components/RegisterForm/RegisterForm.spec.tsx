import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RegisterForm } from './RegisterForm';
import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook from Next.js
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('RegisterForm', () => {
  it('renders the form', () => {
    render(<RegisterForm />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /register/i })
    ).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<RegisterForm />);

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(
      await screen.findByText('Invalid email address')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Password must be at least 6 characters long')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Please confirm your password')
    ).toBeInTheDocument();
  });

  it('shows error when passwords do not match', async () => {
    render(<RegisterForm />);

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.input(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: 'password124' },
    });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(
      await screen.findByText('Passwords do not match')
    ).toBeInTheDocument();
  });

  it('calls the registration handler with valid data', async () => {
    const push = vi.fn();
    (useRouter as any).mockReturnValue({ push });

    render(<RegisterForm />);

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.input(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    // Replace with the actual implementation if needed
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(push).toHaveBeenCalledWith('/login');
  });
});
