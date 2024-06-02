// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import { describe, expect, it, vi } from 'vitest';
// import { Button } from './Button';

// describe('Button', () => {
//   it('renders the button with children', () => {
//     render(<Button>Click me</Button>);
//     expect(screen.getByText('Click me')).toBeInTheDocument();
//   });

//   it('applies the size class when size is provided', () => {
//     render(<Button size="lg">Large Button</Button>);
//     expect(screen.getByText('Large Button')).toHaveClass('lg');
//   });

//   it('applies the outline class when outline is true', () => {
//     render(<Button outline>Outlined Button</Button>);
//     expect(screen.getByText('Outlined Button')).toHaveClass('outline');
//   });

//   it('calls onClick handler when clicked', () => {
//     const onClick = vi.fn();
//     render(<Button onClick={onClick}>Clickable</Button>);
//     screen.getByText('Clickable').click();
//     expect(onClick).toHaveBeenCalledTimes(1);
//   });
// });
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders the button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the size class when size is provided', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByText('Large Button');
    expect(button.className).toMatch(/lg/); // Use regex to match partial class name
  });

  it('applies the outline class when outline is true', () => {
    render(<Button outline>Outlined Button</Button>);
    const button = screen.getByText('Outlined Button');
    expect(button.className).toMatch(/outline/); // Use regex to match partial class name
  });

  it('calls onClick handler when clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Clickable</Button>);
    screen.getByText('Clickable').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with custom className', () => {
    render(<Button className="custom">Custom Button</Button>);
    const button = screen.getByText('Custom Button');
    expect(button.className).toContain('custom');
  });

  it('renders the button with additional props', () => {
    render(<Button aria-label="Custom Label">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveAttribute('aria-label', 'Custom Label');
  });
});
