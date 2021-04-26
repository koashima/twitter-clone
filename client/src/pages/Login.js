import React, { useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';
import { ReactComponent as Logo } from '../assets/swan.svg';
import ErrorsModal from '../components/ErrorsModal';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../context/auth';
import { useForm } from '../utils/hooks';

const Login = ({ history }) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, handleSubmit, values } = useForm(() => loginUser(), {
    username: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_proxy, result) {
      context.login(result.data.login);
      history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  return (
    <>
      <header className="bg-gray-50 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {!context.user ? (
            <h1 className="text-3xl font-bold text-gray-800">
              Please <span className="text-yellow-300">Log in </span>
              or <span className="text-yellow-300"> Sign up </span>
              to experience <span className="text-yellow-300">Squawk!</span>
            </h1>
          ) : (
            <h1 className="text-3xl font-bold text-gray-800">
              Log in! to a different account?!
            </h1>
          )}
          <h1></h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <div className="flex justify-center">
                  <Logo width="200" height="200" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Log in for your account!
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Or
                  <Link
                    to="/login!"
                    className="font-medium text-yellow-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded"
                  >
                    {' '}
                    sign up for your account!
                  </Link>
                </p>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit}
                action="#"
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                      placeholder="Username"
                      value={values.username}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      value={values.password}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-yellow-500 group-hover:text-yellow-300"
                        aria-hidden="true"
                      />
                    </span>
                    Log in!
                  </button>
                </div>
              </form>
            </div>
            <ErrorsModal errors={errors} />
          </div>
        </div>
      </main>
    </>
  );
};
const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      email
      createdAt
      token
    }
  }
`;
export default withRouter(Login);
