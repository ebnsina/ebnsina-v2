import { FC } from 'react';
import { PROJECTS } from '../data/data';
import ArrowRight from './icons/ArrowRight';
import GithubIcon from './icons/GithubIcon';

const Showcase: FC = () => {
  return (
    <section className='py-10 md:py-20'>
      <div className='container mx-auto px-8 md:px-0'>
        <h3
          className='text-6xl font-bold text-center mb-5'
          data-aos='flip-down'
        >
          Project Showcase
        </h3>

        <div className='flex overflow-x-auto overflow-y-hidden py-10 snap-x'>
          {PROJECTS.map((item) => (
            <article
              key={item.id}
              className={`p-10 mx-10 min-w-[400px] transform text-white bg-gradient-to-r ${
                item.fromColor
              } ${item.toColor} ${
                item.id % 2 === 0 ? '-rotate-2' : 'rotate-2'
              }`}
            >
              <h2 className='text-4xl font-bold mb-2'>{item.title}</h2>
              <p className='text-sm'>{item.description}</p>

              <div className='mt-5 flex justify-end space-x-4'>
                <button type='button'>
                  <GithubIcon />
                </button>

                <button type='button'>
                  <ArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className='flex justify-center items-center mt-8'>
          <button className='btn-4'>See More</button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
