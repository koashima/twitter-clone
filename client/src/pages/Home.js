import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
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
                        src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"
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
                  <p className="text-gray-500 dark:text-gray-400 text-xs py-1 my-0.5">
                    {post.createdAt}
                  </p>

                  <hr />
                  <div className="text-gray-500 dark:text-gray-400 flex justify-between mt-3">
                    <div className="mr-6">
                      <span className="ml-3">likes:{post.likeCount}</span>
                    </div>
                    <div className=" mr-6">
                      <span className="ml-3">comments:{post.commentCount}</span>
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
