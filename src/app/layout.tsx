// src/_app.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExampleComponent from '../components/childComponent';

import type { AppProps } from 'next/app';

const Layout: React.FC = () => {
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

export default Layout;
