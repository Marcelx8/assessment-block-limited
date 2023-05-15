'use client';

import { useRouter, usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const Profile = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session?.user && status === 'authenticated') {
    return (
      <>
        <div className="flex flex-col items-end">
          <div className="xs:hidden md:flex items-center text-platinum mb-2">
            Welcome, {session.user.name}
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="bg-transparent border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-space-cadet-200 ease-in-out duration-200 font-bold uppercase text-sm px-2 py-1"
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }

  if (pathname === '/sign-in') {
    return <div className="w-32"></div>;
  }
  return (
    <button
      onClick={() => router.push('/sign-in')}
      disabled={status === 'loading' || status === 'authenticated'}
      className="ml-28 bg-transparent border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-space-cadet-200 ease-in-out duration-200 xs:text-sm xs:px-2 xs:py-1 md:text-base font-bold uppercase md:px-4 md:py-2"
    >
      Sign In
    </button>
  );
};

export default Profile;
