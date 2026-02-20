import User from "@/backend/models/User";
import {comparePass} from "@/service/brcypt";
import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "email"},
                password: {label: "password", type: "password"},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                // cek dulu apakah user nya ada atau tidak
                const data = await User.findUnique({
                    where: {email: credentials.email},
                    include: {
                        profile: true,
                    },
                });
                if (!data) {
                    return null;
                }

                // cek password nya
                const match = await comparePass(data.password, credentials.password);
                if (!match) {
                    return null;
                }

                return {
                    id: data.id,
                    name: data.profile?.nama,
                    email: data.email,
                    image: null,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;
            }
            return token;
        },
        async session({token, session}) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.image = token.image as null;
            }
            return session;
        },
    },
    secret:process.env.NEXT_SECRET
};

export default NextAuth(authOptions);
