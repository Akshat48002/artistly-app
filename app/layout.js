import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
       <body className={`${montserrat.className} min-h-screen flex flex-col bg-black`}>
        <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
