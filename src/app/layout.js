import Layout from "@/components/layout/Layout";
import "./globals.css";

export const metadata = {
  title: "Nexus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
