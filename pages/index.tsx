import type { NextPage } from 'next';
import Head from 'next/head';

import About from '../components/about';
import CallToAction from '../components/call-to-action';
import Hero from '../components/hero';
import Showcase from '../components/showcase';
import Testimonial from '../components/testimonial';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ebn Sina - The FullStack Mystery</title>
        <meta
          name='description'
          content='ebnsina, fullstack developer, software engineer.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
      <About />
      <Showcase />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
