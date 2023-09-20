import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signOut({ user }) {
      // Custom sign-out logic (if needed)
      console.log(user);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
