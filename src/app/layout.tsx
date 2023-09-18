// src/_app.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExampleComponent from '../components/childComponent';
import DatePickerComponent from '../components/datepickerComponent';

import type { AppProps } from 'next/app';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>

        <ExampleComponent/>
        <DatePickerComponent/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
