import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase.config';

const firebaseAuth = getAuth(app);

const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) {
                    return null;
                }

                const { email, password } = parsedCredentials.data;

                // Verificar credenciales con Firebase
                try {
                    const data = await signInWithEmailAndPassword(firebaseAuth, email, password);
                    return data.user;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
}

export const { signIn, signOut, auth } = NextAuth(authConfig);