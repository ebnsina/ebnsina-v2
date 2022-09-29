import Image from 'next/image';
import { FC } from 'react';

import ArrowRight from './icons/ArrowRight';
import DownloadIcon from './icons/DownloadIcon';
import Social from './social';

const Hero: FC = () => {
  return (
    <section className='py-10 md:py-40 relative dark:bg-slate-100'>
      <Social />

      <div className='container mx-auto px-8 md:px-0 grid md:grid-cols-2 gap-10'>
        <div data-aos='fade-right'>
          <h2 className='text-7xl font-bold'>
            Hi <span className='text-slate-400'>,</span>
          </h2>

          <h1 className='text-7xl font-bold'>
            I&apos;m <span className='text-primary'>Ebn Sina</span>
          </h1>

          <p className='text-sm text-slate-700 leading-relaxed mt-3'>
            A FullStack Developer, Software Engineer speacialized in web &amp;
            mobile technologies and building softwares for customer over 4
            years.
          </p>

          <div className='flex space-x-5 mt-5'>
            <button className='btn-2 dark:bg-primary' data-aos='fade-right'>
              <span className='text'>Get in touch</span>
              <span>
                <ArrowRight />
              </span>
            </button>

            <button className='btn-2 dark:bg-tertiary' data-aos='fade-left'>
              <span className='text'>Download CV</span>
              <span>
                <DownloadIcon />
              </span>
            </button>
          </div>
        </div>
        <div data-aos='fade-left'>
          <Image
            src='/images/hero.svg'
            alt='Ebn Sina'
            width={500}
            height={300}
            className='rounded-2xl object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
