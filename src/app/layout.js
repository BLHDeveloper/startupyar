import React from "react";
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
