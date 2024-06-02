import { FC } from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
  name?: string | null;
}

export const Avatar: FC<AvatarProps> = ({ name }) => (
  <div className={styles.avatar}>
    {name
      ? name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .substring(0, 2)
      : ''}

  </div>
);
