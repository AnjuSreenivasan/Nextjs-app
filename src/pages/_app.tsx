// src/_app.tsx
import React from 'react';
import Header from '../app/Header';
import Footer from '../app/Footer';
import ExampleComponent from '../components/childComponent';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main>

        <ExampleComponent/>
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
