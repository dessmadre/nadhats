import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='relative w-screen h-banner'>
      <Image
        src='https://res.cloudinary.com/spacecoupe/image/upload/v1633808404/Banner_nxx4j2.jpg'
        alt='NadHats Banner Image'
        layout='fill'
        objectFit='cover'
      ></Image>
    </header>
  );
};
export default Header;
