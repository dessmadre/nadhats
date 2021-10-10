import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='relative w-screen h-banner'>
      <Image
        src='https://res.cloudinary.com/spacecoupe/image/upload/v1633808404/Banner_nxx4j2.jpg'
        alt='NadHats Banner Image'
        layout='fill'
        objectFit='cover'
      />
      <figure
        className='absolute
       w-full h-full header flex flex-col  items-start pl-150'
      >
        <figcaption className='mt-150'>
          <h1 className='text-4xl font-semibold text-white leading-snug uppercase'>
            Handmade Beanies
          </h1>
          <p className='text-white text-2xl font-medium'>
            new drops every month
          </p>
          <Link href='/store' passHref>
            <button className='bg-gray-800 hover:bg-black p-3 text-white text-xl font-semibold mt-5'>
              Check out our collections
            </button>
          </Link>
        </figcaption>
      </figure>
    </header>
  );
};
export default Header;
