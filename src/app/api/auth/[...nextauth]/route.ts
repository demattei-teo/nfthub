import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/Google'

const valueGithubClientId = process.env.GITHUB_ID ? process.env.GITHUB_ID : ''
const valueGithubClientSecret = process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : ''

const valueGoogleClientId = process.env.GOOGLE_ID ? process.env.GOOGLE_ID : ''
const valueGoogleClientSecret = process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : ''

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: valueGithubClientId,
      clientSecret: valueGithubClientSecret
    }),
    GoogleProvider({
      clientId: valueGoogleClientId,
      clientSecret: valueGoogleClientSecret
    })
  ]
})

export { handler as GET, handler as POST }
