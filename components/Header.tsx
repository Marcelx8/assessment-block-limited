'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Profile from './Profile';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Solutions',
      href: '/solutions',
    },
    {
      name: 'About',
      href: '/about',
    },
  ];

  if (pathname === '/sign-in') return null;

  return (
    <div className="w-full p-5 bg-space-cadet mx-auto flex justify-between flex-row items-center">
      <Link href="/" className="xs:max-w-18 md:max-w-28">
        <Image
          src="/images/bl_logo.png"
          alt="Block Limited Logo"
          className="w-full"
          priority
          width={160}
          height={64}
        />
      </Link>
      <Navigation routes={navItems} />
    </div>
  );
};

export default Header;
