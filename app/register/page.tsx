import { RegisterForm } from '@/components';
import styles from './register.module.css';

export default function Register() {
  return (
    <main className={styles.main}>
      <RegisterForm>
        <div className={styles.intro}>
          <h1>Register</h1>
          <p>
            Please enter your details to
            <br /> create an account
          </p>
        </div>
      </RegisterForm>
    </main>
  );
}
