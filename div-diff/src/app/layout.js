import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Divided Differences Calculator",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className='w-auto max-h-min'>  
        {children}
      </body>
    </html>
  );
}
