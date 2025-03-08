'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../contex/authContext";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeContextProvider } from "../contex/ThemeContext";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
     <ThemeContextProvider>
      <body>
        <GlobalStyles />
      <AuthProvider>
        {children}
      </AuthProvider>
      </body>
      </ThemeContextProvider>
    </html>
  );
}
