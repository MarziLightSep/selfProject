import "./globals.css";
import { Geist } from 'next/font/google'
import Header from "@/components/Header";
 
const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
