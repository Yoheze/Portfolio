import React from 'react';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app'
import type { NextComponentType, NextPageContext } from 'next'

interface MyAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, any, {}>
}


function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;