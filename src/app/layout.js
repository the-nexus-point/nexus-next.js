import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <div className="gradient-background">
          <div>NAVBAR</div>
          {children}
          <div>FOOTER</div>
        </div>
      </body>
    </html>
  );
}
