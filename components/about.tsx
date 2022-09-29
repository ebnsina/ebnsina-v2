import Image from 'next/image';
import { FC } from 'react';
import { SERVICES } from '../data/data';

const About: FC = () => {
  return (
    <section className='bg-slate-100 dark:bg-slate-900 dark:text-white py-10 md:py-40'>
      <div className='container mx-auto px-8 md:px-0 text-center'>
        <div className='flex justify-center items-center'>
          <div
            data-aos='zoom-in'
            className='bg-gradient-to-tr from-pink-500 to-yellow-500 p-1 rounded-full'
          >
            <div
              className='bg-white p-1 rounded-full'
              style={{ fontSize: '0' }}
            >
              <Image
                className='w-72 h-72 rounded-full object-cover'
                src='/images/ebnsina.jpeg'
                alt='ebnsina'
                width={288}
                height={288}
              />
            </div>
          </div>
        </div>

        <h2 className='text-6xl font-bold my-5' data-aos='flip-up'>
          About Me
        </h2>
        <p className='max-w-2xl mx-auto' data-aos='flip-down'>
          Passionate software developer with 4+ years of experience, seeking to
          elevate devX. As a Software Engineer received 95% client satisfaction
          scores. Completed projects 10% before gloasl with 25% higher than
          average. Honorable mention, 2021 dev lead Award.
        </p>

        <div className='max-w-lg mx-auto flex justify-center md:justify-between items-center mt-10'>
          <div className='flex items-center'>
            <h2
              data-aos='zoom-in-left'
              className='text-8xl font-bold text-primary'
            >
              4+
            </h2>
            <span className='block ml-2 text-sm text-slate-700 dark:text-white'>
              Years of Experience
            </span>
          </div>
          <div className='flex items-center'>
            <h2
              data-aos='zoom-in-right'
              className='text-8xl font-bold text-secondary'
            >
              37+
            </h2>
            <span className='block ml-2 text-sm text-slate-700 dark:text-white'>
              Clients Served
            </span>
          </div>
        </div>

        {/* Services */}
        <h3
          className='text-6xl font-bold text-center mb-5 pt-20'
          data-aos='flip-down'
        >
          Service I Offer
        </h3>

        <div className='grid md:grid-cols-3 gap-10 text-center'>
          {SERVICES.map((item) => (
            <article
              key={item.id}
              style={{ backgroundColor: `${item.color}` }}
              className={`flex flex-col justify-between p-8 dark:text-black`}
              data-aos={`${item.id % 2 !== 0 ? 'flip-left' : 'flip-right'}`}
            >
              <h2 className='text-4xl font-bold mb-2'>{item.title}</h2>
              <p className='text-sm leading-relaxed'>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
