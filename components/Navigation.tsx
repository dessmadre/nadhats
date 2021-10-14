import Link from 'next/link';
import Logo from './Logo';
import { useCartRetrieve } from '../queries';
interface INavLinks {
  label: string;
  target: string;
}

const Navigation: React.FC = () => {
  const { data, isFetching } = useCartRetrieve();

  const totalItems = data?.total_items;

  const navLinks: INavLinks[] = [
    { label: 'Home', target: '/' },
    { label: 'Store', target: '/store' },
    { label: 'About', target: '/about' },
  ];

  return (
    <nav className='h-150 pr-150 flex justify-between'>
      <Link href='/' passHref>
        <figure className='min-w-150 min-h-150 relative flex justify-center items-center cursor-pointer'>
          <Logo />
        </figure>
      </Link>
      <ul className='flex justify-center items-center'>
        {navLinks.map((l) => (
          <Link href={l.target} passHref key={l.target}>
            <li className='nav-link cursor-pointer text-xl font-semibold'>
              {l.label}
            </li>
          </Link>
        ))}
        <Link href='/cart' passHref>
          <li className='nav-link cursor-pointer text-xl font-semibold flex items-center'>
            <p>Cart</p>
            {isFetching ? (
              <div className='flex justify-center items-center  ml-2 skeleton text-center text-white text-xs h-8 w-8 rounded-full' />
            ) : (
              <div className='flex justify-center items-center  ml-2 bg-black text-center text-white text-xs h-8 w-8 rounded-full'>
                {totalItems === 0 ? <p>0</p> : <p>{totalItems}</p>}
              </div>
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
