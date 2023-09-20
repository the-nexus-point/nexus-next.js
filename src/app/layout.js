import Layout from "@/components/layout/Layout";
import "./globals.css";
import { ChakraProviders } from "../services/Chakraproviders";
import { NextAuthProvider } from "@/services/NextauthProvider";

export const metadata = {
  title: "Nexus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white`}>
        <NextAuthProvider>
          <ChakraProviders>
            <Layout>{children}</Layout>
          </ChakraProviders>
        </NextAuthProvider>
      </body>
    </html>
  );
}
