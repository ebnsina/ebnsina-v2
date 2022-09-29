import Image from 'next/image';
import { FC } from 'react';

const CallToAction: FC = () => {
  return (
    <section className='py-10 md:py-20'>
      <div className='container mx-auto px-8 md:px-0'>
        <h2
          className='text-6xl font-bold text-center mb-5'
          data-aos='flip-down'
        >
          Let&apos;s make something amazing
        </h2>
        <h4 className='text-xl font-bold text-center mb-8' data-aos='flip-up'>
          Write to me
        </h4>

        <div className='relative'>
          <form
            className='border border-primary bg-white dark:bg-slate-800 dark:border-tertiary grid md:grid-cols-3 gap-10 items-center p-4'
            autoComplete='off'
          >
            <input
              data-aos='fade-left'
              className='w-full border-slate-300 py-5 focus:ring-0 focus:border-secondary'
              type='email'
              name='email'
              placeholder='Your fancy email'
              required
            />
            <textarea
              className='w-full border-slate-300 py-2 focus:ring-0 focus:border-secondary'
              name='message'
              placeholder='Type your message here'
              required
              data-aos='fade-up'
            ></textarea>

            <button
              data-aos='fade-right'
              type='submit'
              className='btn-3 px-8 py-4 font-bold text-white transition-all duration-500 ease-linear cursor-pointer select-none touch-manipulation font-sans-heading text-2xl'
            >
              Get a quote
            </button>
          </form>

          <div className='move-up-down absolute -top-16 -left-20 -z-10 transform -rotate-12 '>
            <Image
              src='/images/social/love.svg'
              width={200}
              height={100}
              alt='love'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
