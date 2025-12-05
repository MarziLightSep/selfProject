import "./globals.css";
import { Geist } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 
const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="min-h-screen flex flex-col">
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
