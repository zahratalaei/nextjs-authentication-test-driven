import { redirect } from 'next/navigation';

export default function Home() {
  // Perform the redirect to the login page
  redirect('/login');
  return null;
}
