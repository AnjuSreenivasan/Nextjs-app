// src/_app.tsx
import React from 'react';
import Layout from '../app/layout';


import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (   
      <Layout />
  );
}

export default MyApp;
