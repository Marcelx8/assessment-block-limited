'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Profile from './Profile';
import { signOut, useSession } from 'next-auth/react';

interface NavigationProps {
  routes: {
    name: string;
    href: string;
  }[];
}

const Navigation = ({ routes }: NavigationProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex w-10 relative z-2">
        <div className="flex md:hidden">
          <button
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
            className={`p-1 border text-persian-green border-persian-green focus:outline-none z-10 ${
              menuOpen ? 'bg-persian-green-200' : ''
            }`}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 556.98 556.98"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M536.846,23.491H20.135C9.015,23.491,0,32.506,0,43.62v107.37c0,11.12,9.015,20.128,20.135,20.128h516.711 c11.121,0,20.135-9.015,20.135-20.128V43.626C556.975,32.506,547.967,23.491,536.846,23.491z"></path>{' '}
              <path d="M536.846,204.68H20.135C9.015,204.68,0,213.694,0,224.809v107.369c0,11.12,9.015,20.129,20.135,20.129h516.711 c11.121,0,20.135-9.015,20.135-20.129V224.809C556.975,213.688,547.967,204.68,536.846,204.68z"></path>{' '}
              <path d="M536.846,385.862H20.135C9.015,385.862,0,394.877,0,405.991V513.36c0,11.12,9.015,20.129,20.135,20.129h516.711 c11.121,0,20.135-9.015,20.135-20.129V405.991C556.975,394.877,547.967,385.862,536.846,385.862z"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute z-[999] top-16 -right-5 w-[100vw] box-shadow-lg `}
        >
          <nav className="flex-col bg-white w-full p-4">
            {routes.map((route, index) => {
              const isActive = pathname === route.href;

              return (
                <div key={route.name} className="mx-5 my-2 py-2 text-center">
                  <Link
                    onClick={() => setMenuOpen(false)}
                    href={route.href}
                    className={`text-persian-green uppercase focus:border-b-2 w-full ${
                      isActive ? 'border-b-2 border-persian-green' : ''
                    }`}
                  >
                    {route.name}
                  </Link>
                </div>
              );
            })}
            {pathname !== '/sign-in' && (
              <div className="w-full text-center">
                {session?.user && status === 'authenticated' ? (
                  <>
                    <div className="mb-4 text-sm text-persian-green">
                      Signed in as {session.user.name}
                    </div>
                    <button
                      onClick={() => signOut()}
                      className="mb-4 bg-transparent border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-persian-green-200 ease-in-out duration-200 xs:text-sm xs:px-2 xs:py-1 md:text-base font-bold uppercase md:px-4 md:py-2"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => router.push('/sign-in')}
                      disabled={
                        status === 'loading' || status === 'authenticated'
                      }
                      className="mb-4 bg-transparent border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-persian-green-200 ease-in-out duration-200 xs:text-sm xs:px-2 xs:py-1 md:text-base font-bold uppercase md:px-4 md:py-2"
                    >
                      Sign In
                    </button>
                  </>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>

      <div className="w-full xs:hidden md:flex">
        <nav className="md:mx-auto md:flex flex-wrap items-center text-lg justify-center">
          {routes.map((route, index) => {
            const isActive = pathname === route.href;

            return (
              <div key={route.name}>
                <Link
                  href={route.href}
                  className={`mx-5 text-persian-green uppercase ${
                    isActive ? 'underline underline-offset-4' : ''
                  }`}
                >
                  {route.name}
                </Link>
                {index < routes.length - 1 && (
                  <span className="text-persian-green uppercase text-2xl">
                    |
                  </span>
                )}
              </div>
            );
          })}
        </nav>
        <Profile />
      </div>
    </>
  );
};

export default Navigation;
