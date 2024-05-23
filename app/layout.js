import { Inter } from "next/font/google";
import "./globals.css";
import CinewaveLogo from "../public/cinewave-logo.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cinewave Home",
  description: "Cinewave Home Page, Dont Let the Ocean Take You!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">

        {children}
      </body>
    </html>
  );
}
