import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './Card';

describe('Card component', () => {
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>);
    const cardElement = screen.getByText('Test Content');
    expect(cardElement).toBeTruthy();
  });

  it('applies additional className', () => {
    render(<Card className="custom-class">Test Content</Card>);
    const cardElement = screen.getByText('Test Content');
    expect(cardElement.classList.contains('custom-class')).toBe(true);
  });
});
