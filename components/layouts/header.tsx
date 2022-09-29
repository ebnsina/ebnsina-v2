import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  const handleTheme = () => {
    window.document.body.classList.toggle('dark');
  };

  return (
    <header className='hidden md:block py-6 sticky top-0 left-0 w-full z-50 bg-white dark:bg-slate-100'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='relative'>
          <Link href='/'>
            <a className='text-2xl font-semibold'>ES</a>
          </Link>

          <sup className='inline-block ml-1'>en</sup>
        </div>

        <nav>
          <ul className='flex space-x-8 items-center text-xl'>
            <li>
              <Link href='/home'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/showcase'>
                <a>Showcase</a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='/uses'>
                <a>Uses</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul className='flex space-x-4 items-center'>
            <li>
              <button className='btn-fancy'>Let&apos;s Be Real!</button>
            </li>
            <li>
              <button
                type='button'
                onClick={handleTheme}
                className='text-sm text-slate-700 underline'
              >
                Switch Theme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
