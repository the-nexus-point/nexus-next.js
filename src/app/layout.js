import Layout from "@/components/layout/Layout";
import "./globals.css";
import { Providers } from "../components/services/providers";
import SessionProviders from "@/components/services/sessionProvider";

export const metadata = {
  title: "Nexus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white`}>
        <SessionProviders>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </SessionProviders>
      </body>
    </html>
  );
}
