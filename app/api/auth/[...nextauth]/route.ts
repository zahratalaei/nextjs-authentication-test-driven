import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, {
    providers: [
      // GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID as string,
      //   clientSecret: process.env.GOOGLE_CLIENT_PASSWORD as string,
      // }),
      Credentials({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          if (
            credentials?.password &&
            credentials?.password === process.env.PASSWORD
          ) {
            return {
              id: '1',
              name: credentials?.email?.split('@')[0].replace(/\.|-|_/g, ' '),
              ...credentials,
            };
          }
          return null;
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60, // 30 Days
    },
    pages: {
      signIn: '/login',
      signOut: '/login',
      error: '/login',
      verifyRequest: '/login',
      newUser: '/login',
    },
  });
};

export { handler as GET, handler as POST };
