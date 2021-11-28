import React, { FC } from "react";
import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <html>
      <Head>
        <title>Fraktal | Fractional NFTs</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Fractional NFTs governed by a DAO." />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-095Q8484JB"
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-095Q8484JB');`,
          }}
        />
      </Head>
      {children}
    </html>
  );
};

export default Layout;
