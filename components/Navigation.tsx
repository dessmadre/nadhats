import Link from 'next/link';
import Logo from './Logo';

export default function Navigation() {
  interface INavLinks {
    label: string;
    target: string;
  }

  const navLinks: INavLinks[] = [
    { label: 'Home', target: '/' },
    { label: 'Store', target: '/store' },
    { label: 'About', target: '/about' },
    { label: 'Cart', target: '/cart' },
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
      </ul>
    </nav>
  );
}
