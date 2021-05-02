import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

const Post = ({
  post: { id, username, body, createdAt, likeCount, commentCount, likes },
}) => {
  const deletePost = () => {};
  const likePost = () => console.log('add like functionality');
  const showComments = () =>
    console.log('show post disclosure with focous on adding a comment?');
  return (
    <div
      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl mb-2"
      key={id}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="h-11 w-11 rounded-full"
            alt="user's profile "
            src="https://via.placeholder.com/150/FFFF00/000000"
          />
          <div className="ml-1.5 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block ">
              {username}
            </span>
          </div>
        </div>
        <Menu as="div" className=" relative">
          {({ open }) => (
            <>
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded">
                <Menu.Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
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
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={deletePost}
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-1 py-2 text-base`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="red"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        <div> Delete!?</div>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
      <p className="text-black dark:text-white block text-xl leading-snug mt-3">
        {body}
      </p>
      <Link
        to={`/posts/${id}`}
        className="text-gray-500 dark:text-gray-400 text-xs py-1 my-0.5 cursor-pointer hover:text-yellow-300"
      >
        {createdAt}
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
          <span className="ml-3">{likeCount}</span>
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
          <span className="ml-3">{commentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
