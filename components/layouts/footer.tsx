import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='py-20 bg-slate-50 dark:bg-slate-100'>
      <div className='container mx-auto px-8 md:px-0'>
        <hr className='my-5' />

        <div className='flex justify-between items-center'>
          <Link href='/'>
            <a className='inline-block text-2xl'>Ebn Sina</a>
          </Link>

          <p className='text-slate-500 text-sm'>
            &copy; {new Date().getFullYear()} - Ebn Sina. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
