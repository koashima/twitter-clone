import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ReactComponent as Logo } from '../assets/swan.svg';
import { AuthContext } from '../context/auth';
const navigation = ['HOME!', 'LOGIN!', 'SIGNUP!'];
const profile = ['Home!', 'Log out!'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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
                      <div>
                        <Menu.Button className="text-white hover:bg-yellow-500 px-3 py-2 rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded">
                          <span className="sr-only">Open user menu</span>
                          <Link to="/">Squawk! {user.username}!</Link>
                        </Menu.Button>
                      </div>
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
                      to="/"
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
