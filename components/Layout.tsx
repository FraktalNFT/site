import React, { FC } from 'react'
import Head from 'next/head'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Fraktal | Fractional NFTs</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Fractional NFTs powered by a DAO." />
      </Head>
      {children}
   </div>
  );
}

export default Layout;
