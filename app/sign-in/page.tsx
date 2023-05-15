'use client';
import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { signIn, signOut, useSession } from 'next-auth/react';

interface SignInValuesProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSubmit = async (
    values: SignInValuesProps,
    actions: FormikHelpers<SignInValuesProps>
  ) => {
    try {
      const success = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      actions.resetForm();
      if (success) {
        router.push('/');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col relative h-screen items-center justify-center">
      <div className="max-w-[600px] min-h-[300px] ease-in-out duration-200 mx-auto border-t-4 border-t-flame p-10 bg-white drop-shadow-bottom">
        <div className="flex w-full justify-center mb-10">
          <Image
            src="/images/bl_logo.png"
            alt="Block Limited Logo"
            priority
            width={160}
            height={64}
          />
        </div>

        {session?.user && status === 'authenticated' ? (
          <div className="flex flex-col items-center ">
            <div className="flex flex-col text-center mb-6">
              <p>You are already signed in as</p>
              <p className="underline">{session.user.email}</p>
            </div>
            <div className="flex justify-between space-x-4">
              <button
                onClick={() => router.push('/')}
                className="bg-white border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-persian-green-100 ease-in-out duration-200 text-base font-bold uppercase px-8 py-2"
              >
                Home
              </button>
              <button
                onClick={() =>
                  signOut({
                    callbackUrl: '/sign-in',
                    redirect: false,
                  })
                }
                className="bg-white border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-persian-green-100 ease-in-out duration-200 text-base font-bold uppercase px-8 py-2"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <Formik
            enableReinitialize
            initialValues={{
              email: 'johndoe@yourmail.com',
              password: 'password',
            }}
            onSubmit={handleSubmit}
          >
            {(actions) => (
              <Form>
                <div className="flex flex-col mb-4">
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="border-2 border-gray-400 focus:border-persian-green focus:outline-none p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="password">Password</label>
                    <div className="relative w-full">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        className="border-2 border-r-0 border-gray-400 focus:border-persian-green focus:outline-none p-2 w-full"
                      />
                      <span
                        className="cursor-pointer absolute text-red bg-gray-400 z-2 top-0 right-0 p-2.5 pt-3 h-full w-10 input-group-text border-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_iconCarrier">
                              <path d="M8 5.5A2.59 2.59 0 0 0 5.33 8 2.59 2.59 0 0 0 8 10.5 2.59 2.59 0 0 0 10.67 8 2.59 2.59 0 0 0 8 5.5zm0 3.75A1.35 1.35 0 0 1 6.58 8 1.35 1.35 0 0 1 8 6.75 1.35 1.35 0 0 1 9.42 8 1.35 1.35 0 0 1 8 9.25z"></path>
                              <path d="M8 2.5A8.11 8.11 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5A8.11 8.11 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5.4 7.5A6.91 6.91 0 0 1 8 12.25 6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.91 6.91 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2z"></path>
                            </g>
                          </svg>
                        ) : (
                          <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_iconCarrier">
                              <path d="M8 2.5a9.77 9.77 0 0 0-2.53.32l1 1.05A8.78 8.78 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2c-.12.13-.24.26-.37.38l.89.89A8.24 8.24 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5 9.56-.9-.9-6.97-6.91-1-1-1.19-1.19-.88.88 1 1A8.25 8.25 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5 9.05 9.05 0 0 0 3.82-.79l1.24 1.23.88-.88-1-1zM6.66 7.54l1.67 1.67a1.47 1.47 0 0 1-.36 0A1.35 1.35 0 0 1 6.55 8a1.07 1.07 0 0 1 .11-.46zM8 12.25A6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.49 6.49 0 0 1 4 4.84l1.74 1.79A2.33 2.33 0 0 0 5.3 8 2.59 2.59 0 0 0 8 10.5a2.78 2.78 0 0 0 1.32-.33l1.58 1.58a8 8 0 0 1-2.9.5z"></path>
                            </g>
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between space-x-4">
                  <button
                    onClick={() => router.push('/')}
                    className="bg-white border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-persian-green-100 ease-in-out duration-200 text-base font-bold uppercase px-8 py-2"
                  >
                    Home
                  </button>
                  <button
                    type="submit"
                    disabled={
                      actions.isSubmitting ||
                      status === 'loading' ||
                      status === 'authenticated'
                    }
                    className="bg-white border-2 border-persian-green text-persian-green focus:ouline-none hover:bg-persian-green-100 ease-in-out duration-200 text-base font-bold uppercase px-8 py-2"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default SignIn;
