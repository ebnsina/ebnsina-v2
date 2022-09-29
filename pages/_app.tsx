import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import '../styles/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
