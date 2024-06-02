// import { render, screen } from '@testing-library/react';
// import { SessionProvider } from 'next-auth/react';
// import { beforeAll, describe, expect, it, vi } from 'vitest';
// import { Header } from './Header';

// beforeAll(() => {
//   vi.mock('next/navigation', () => ({
//     useRouter: vi.fn(() => ({
//       push: vi.fn(),
//       replace: vi.fn(),
//       prefetch: vi.fn(),
//       query: {},
//       asPath: '',
//       pathname: '/',
//     })),
//   }));
// });

// describe('Header Component', () => {
//   it('Should display "Login" and "Register" buttons when the user is not logged in', () => {
//     render(
//       <SessionProvider session={null}>
//         <Header />
//       </SessionProvider>
//     );
//     expect(screen.getByText('Login')).toBeTruthy();
//     expect(screen.getByText('Register')).toBeTruthy();
//   });

//   it('Should display "Logout" button and user avatar when the user is logged in', () => {
//     const session = {
//       user: { name: 'John Doe' },
//       expires: 'some-future-date',
//     };

//     render(
//       <SessionProvider session={session}>
//         <Header />
//       </SessionProvider>
//     );

//     expect(screen.getByText('Logout')).toBeTruthy();
//     expect(screen.getByText('John Doe')).toBeTruthy();
//   });
// });
import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { Header } from './Header';

beforeAll(() => {
  vi.mock('next/navigation', () => ({
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      query: {},
      asPath: '',
      pathname: '/',
    })),
  }));
});

describe('Header Component', () => {
  it('Should display "Login" and "Register" buttons when the user is not logged in', () => {
    render(
      <SessionProvider session={null}>
        <Header />
      </SessionProvider>
    );
    expect(screen.getByText('Login')).toBeTruthy();
    expect(screen.getByText('Register')).toBeTruthy();
  });

  it('Should display "Logout" button and user avatar when the user is logged in', () => {
    const session = {
      user: { name: 'John Doe' },
      expires: 'some-future-date',
    };

    render(
      <SessionProvider session={session}>
        <Header />
      </SessionProvider>
    );

    expect(screen.getByText('Logout')).toBeTruthy();
    expect(screen.getByText('JD')).toBeTruthy(); // Check for initials instead of full name
  });
});
