import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import GitHubProvider from "next-auth/providers/github"
// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/providers/oauth
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: MongoDBAdapter(clientPromise) as any,
});

export { handler as GET, handler as POST};