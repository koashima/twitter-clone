import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ReactComponent as Logo } from '../assets/swan.svg';
import { AuthContext } from '../context/auth';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const nav = user ? (
    <Disclosure as="nav" className="bg-yellow-300">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Logo width="50" height="50" />

                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded">
                        <span className="sr-only">Back to Home!</span>
                        <Link to="/">Squawk! {user.username}!</Link>
                        <Menu.Button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2 inline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  className={`${
                                    active
                                      ? 'bg-yellow-500 text-white'
                                      : 'text-gray-900'
                                  } group flex rounded-md items-center w-full px-1 py-2 text-base`}
                                >
                                  {active ? (
                                    <div
                                      className="w-5 h-5 mr-2"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <div
                                      className="w-5 h-5 mr-2"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Home?!
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/login!"
                                  className={`${
                                    active
                                      ? 'bg-yellow-500 text-white'
                                      : 'text-gray-900'
                                  } group flex rounded-md items-center w-full px-1 py-2 text-base text-justify`}
                                >
                                  {active ? (
                                    <div
                                      className="w-5 h-5 mr-2"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <div
                                      className="w-5 h-5 mr-2"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Log in with a different account?!
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>

              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Link
                    to="/"
                    className="text-white hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded"
                    onClick={logout}
                  >
                    Log out!
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-yellow-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-yellow-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link
                to="/"
                className="text-gray-100 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
              >
                Home!
              </Link>
              <Link
                to="/login!"
                className="text-gray-100 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
              >
                Log in to a different account?!
              </Link>
              <div
                onClick={logout}
                className="text-gray-100  cursor-pointer hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
              >
                Log out!
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ) : (
    <Disclosure as="nav" className="bg-yellow-300">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Logo width="50" height="50" />

                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className="justify-self-end text-white hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded"
                    >
                      Home!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="login!"
                      className="justify-self-end text-white hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded"
                    >
                      Log in!
                    </Link>
                    <Link
                      to="/signup!"
                      className="justify-self-end text-white hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded"
                    >
                      Sign up!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-yellow-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-yellow-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link
                to="/"
                className="text-gray-100 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
              >
                Home!
              </Link>

              <Link
                to="login!"
                className="text-gray-100 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
              >
                Log in!
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );

  return nav;
};
export default Navbar;
