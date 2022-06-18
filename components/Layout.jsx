import React from "react";
import Head from "next/head";
import { NavBar, Footer } from "./";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>MG Store</title>
        <link rel="icon" type="image/png" sizes="114x114" href="../public/favicon.png" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export { Layout };
