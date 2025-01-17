import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import KeycloakProvider from "next-auth/providers/keycloak";
import GoogleProvider from "next-auth/providers/google";
import GitlabProvider from "next-auth/providers/gitlab";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.SPASHIP_AUTH__GITHUB_ID,
      clientSecret: process.env.SPASHIP_AUTH__GITHUB_SECRET
    }),
    GitlabProvider({
        clientId: process.env.SPASHIP_AUTH__GITLAB_CLIENT_ID,
        clientSecret: process.env.SPASHIP_AUTH__GITLAB_CLIENT_SECRET
    }),
    GoogleProvider({
        clientId: process.env.SPASHIP_AUTH__GOOGLE_CLIENT_ID,
        clientSecret: process.env.SPASHIP_AUTH__GOOGLE_CLIENT_SECRET
    }),
    KeycloakProvider({
        clientId: process.env.SPASHIP_AUTH__KEYCLOAK_ID,
        clientSecret: process.env.SPASHIP_AUTH__KEYCLOAK_SECRET,
        issuer: process.env.SPASHIP_AUTH__KEYCLOAK_ISSUER
      })
    // ...add more providers here
  ],
})