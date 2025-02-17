
import Navbar from "@/components/clientComponents/Navbar";
import "./globals.css";
import Footer from "@/components/clientComponents/Footer";



export const metadata = {
  title: "TechTronix",
  description: "Tech Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
