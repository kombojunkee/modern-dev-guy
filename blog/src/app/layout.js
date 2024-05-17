"use client"
import { useEffect } from 'react';
import './sass/style.scss'
import Footer from './ui/Footer/Footer';
import Aos from 'aos';
import CustomCursor from './ui/CustomCursor/CustomCursor';


export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <title>Devis - Personal portfolio NextJs template</title>
      </head>
      <body>
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html> 
  );
}
