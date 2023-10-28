"use client";
import Layout from "@/components/layout/Layout";
import "./globals.css";
import { ChakraProviders } from "../services/Chakraproviders";
import { NextAuthProvider } from "@/services/NextauthProvider";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isSignInPage = pathname.startsWith("/signup");
  const isLogInPage = pathname.startsWith("/login");

  if (isSignInPage || isLogInPage) {
    return (
      <html lang="en">
        <body className={`text-white`}>
          <NextAuthProvider>
            <ChakraProviders>{children}</ChakraProviders>
          </NextAuthProvider>
        </body>
      </html>
    );
  }

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
