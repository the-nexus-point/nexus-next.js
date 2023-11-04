"use client";
import Layout from "@/components/layout/Layout";
import "./globals.css";
import { ChakraProviders } from "../services/Chakraproviders";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isSignInPage = pathname.startsWith("/signup");
  const isLogInPage = pathname.startsWith("/login");

  if (isSignInPage || isLogInPage) {
    return (
      <html lang="en">
        <body className={`text-white`}>
          <NextTopLoader color="#7E22CD" />
          <ChakraProviders>{children}</ChakraProviders>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`text-white`}>
        <NextTopLoader color="#7E22CD" />
        <ChakraProviders>
          <Layout>{children}</Layout>
        </ChakraProviders>
      </body>
    </html>
  );
}
