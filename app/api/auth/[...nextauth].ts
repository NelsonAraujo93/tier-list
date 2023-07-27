import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/providers/oauth
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
  ]
});
