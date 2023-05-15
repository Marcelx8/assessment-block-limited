'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
    },
    {
      name: 'Terms and Conditions',
      href: '/terms-conditions',
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
    },
  ];

  if (pathname === '/sign-in') return null;

  return (
    <div className="relative bg-flame text-white w-full p-6 py-10 mx-auto mt-auto flex xs:flex-col-reverse md:flex-row justify-center items-center">
      <div className="text-sm md:text-left">© 2023, Block Limited</div>
      <div className="flex xs:flex-wrap md:flex-nowrap xs:justify-center xs:text-center md:text-right xs:mb-4 md:mb-0  md:ml-auto">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`xs:leading-10 mx-3 text-white text-sm underline ${
                  isActive ? 'text-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
