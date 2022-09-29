import { FC } from 'react';

const Testimonial: FC = () => {
  return (
    <section className='py-10 md:py-20 bg-slate-50 dark:bg-slate-900 dark:text-white'>
      <div className='container mx-auto px-8 md:px-0'>
        <h3
          className='text-6xl font-bold text-center mb-5'
          data-aos='flip-down'
        >
          What Client Say
        </h3>

        <div
          data-aos='zoom-in'
          className='max-w-md mx-auto relative border border-pink-400 dark:border-primary w-fit'
        >
          <article className='border border-cyan-400 p-6 bg-white dark:bg-slate-800 dark:border-tertiary transform -rotate-3'>
            <blockquote className='text-slate-600 dark:text-white'>
              I've been working with Ebn Sina since 2017 and it's been a
              fantastic experience! He works quickly and regularly produces
              high-quality results. He translates my concept into professional
              visual design that serves my business goals.
            </blockquote>

            <div className='mt-5 text-right'>
              <h4 className='font-bold text-xl'>Ed Warren</h4>
              <span className='inline-block text-xs text-slate-600 dark:text-white'>
                - CEO, Elliatta Inc.
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
