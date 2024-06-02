'use client';

import { Card } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn} from 'next-auth/react';
import { FC, ReactNode, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import styles from './login-form.module.css';

interface LoginFormProps {
  children?: ReactNode;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, {
    message: 'Please enter password',
  }),
});

export const LoginForm: FC<LoginFormProps> = ({ children }) => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(authSchema),
  });

  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginFormData> = async (body) => {
    setIsLoading(true);
    setLoginError(null);

    const result = await signIn('credentials', {
      redirect: false, // Prevent automatic redirection
      callbackUrl: '/contacts',
      ...body,
    });

    setIsLoading(false);

    if (result?.error) {
      // Handle error response
      setLoginError('Invalid credentials. Please try again.');
    } else if (result?.url) {
      // Handle successful login
      window.location.href = result.url;
    } else {
      // Unexpected response
      setLoginError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {children}
        <input type="email" {...register('email')} placeholder="Email" />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit" disabled={isLoading} className={styles.button}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {loginError && <span className={styles.error}>{loginError}</span>}
{/* <p>OR</p>
        <button onClick={() => signIn('google')} className={styles.button}>
           Continue withGoogle
        </button> */}
      </form>
    </Card>
  );
};
