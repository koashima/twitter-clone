import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { AuthContext } from '../context/auth';
import Login from './Login'

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  const likePost = () => console.log('add like functionality');
  const showComments = () =>
    console.log('show post disclosure with focous on adding a comment?');
  const home = !user ? (
    <Login />
  ) : (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">HOME!</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex justify-center">
          <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div>loading...</div>
            ) : (
              data.getPosts &&
              data.getPosts.map((post) => (
                <div
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl mb-2"
                  key={post.id}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="https://via.placeholder.com/150/FFFF00/000000"
                      />
                      <div className="ml-1.5 text-sm leading-tight">
                        <span className="text-black dark:text-white font-bold block ">
                          {post.username}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-black dark:text-white block text-xl leading-snug mt-3">
                    {post.body}
                  </p>
                  <Link
                    to={`/posts/${post.id}`}
                    className="text-gray-500 dark:text-gray-400 text-xs py-1 my-0.5 cursor-pointer hover:text-yellow-300"
                  >
                    {post.createdAt}
                  </Link>

                  <hr />
                  <div className="text-gray-500 dark:text-gray-400 flex justify-between mt-3">
                    <div className="mr-6 flex">
                      <svg
                        onClick={likePost}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer hover:text-yellow-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="ml-3">{post.likeCount}</span>
                    </div>
                    <div className=" mr-6 flex">
                      <svg
                        onClick={showComments}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer hover:text-yellow-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      <span className="ml-3">{post.commentCount}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
  return home;
};
const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      username
      createdAt
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        body
      }
    }
  }
`;
export default Home;
