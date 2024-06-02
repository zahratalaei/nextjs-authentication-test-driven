'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import styles from './header.module.css';
import Link from 'next/link';

export const Header: FC = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const onLogout = async () => {
    try {
      await signOut({ callbackUrl: '/login' });
    } catch (err) {
      console.error('Sign out error', err);
    }
  };

  const login = () => router.push('/login');
  const handleRegister = () => router.push('/register'); // Handle registration navigation

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        A
      </Link>
      {status === 'unauthenticated' ? (
        <div className={styles.authButtons}>
          <Button size="sm" outline onClick={login}>
            Login
          </Button>
          <Button size="sm" outline onClick={handleRegister}>
            Register
          </Button>
        </div>
      ) : (
        <>
          <Button size="sm" outline onClick={onLogout}>
            Logout
          </Button>
          <Avatar name={data?.user?.name} />
        </>
      )}
    </header>
  );
};
