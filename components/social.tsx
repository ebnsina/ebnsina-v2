import Image from 'next/image';
import { FC } from 'react';

const Social: FC = () => {
  return (
    <section className='hidden md:block fixed top-0 right-10 transform translate-y-1/2 text-right'>
      <ul className='space-y-6'>
        <li>
          <a
            className='block underline'
            href='https://m.me/ebnsina.dev'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/social/fb-messenger.svg'
              width={28}
              height={28}
              alt='facebook'
            />
          </a>
        </li>
        <li>
          <a
            className='block underline'
            href='https://twitter.com/ebns1na'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/social/twitter.svg'
              width={40}
              height={40}
              alt='twitter'
            />
          </a>
        </li>
        <li>
          <a
            className='block underline'
            href='https://instagram.com/ebnsina7'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/social/instagram.svg'
              width={28}
              height={28}
              alt='instagram'
            />
          </a>
        </li>
        <li>
          <a
            className='block underline'
            href='https://www.linkedin.com/in/ebn-sina/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/social/linkedin.svg'
              width={28}
              height={28}
              alt='linkedin'
            />
          </a>
        </li>
        <li>
          <a
            className='block underline'
            href='https://www.youtube.com/channel/UC9Fr3dOzOdboqPl_YJrpmOw'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/social/youtube.svg'
              width={35}
              height={35}
              alt='youtube'
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Social;
