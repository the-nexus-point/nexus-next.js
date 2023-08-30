import Layout from "@/components/layout/Layout";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Nexus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
