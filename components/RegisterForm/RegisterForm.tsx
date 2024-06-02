'use client';

import { Card } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import styles from './register-form.module.css';

interface RegisterFormProps {
  children?: ReactNode;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const RegisterForm: FC<RegisterFormProps> = ({ children }) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (body) => {
    try {
      // Replace this with your registration logic
      console.log('User registered:', body);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {children}
        <input type="email" {...register('email')} placeholder="Email" />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
        />
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword.message}</span>
        )}
        <button type="submit">Register</button>
      </form>
    </Card>
  );
};
