import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Menu, Transition } from '@headlessui/react';
import gql from 'graphql-tag';
import { AuthContext } from '../context/auth';
import Login from './Login';
import PostForm from '../components/PostForm';
import Post from '../components/Post';

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

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
            <h2 className="text-xl">hey {user.username}...</h2>
            <PostForm />
            {loading ? (
              <div>loading...</div>
            ) : (
              data.getPosts && data.getPosts.map((post) => <Post post={post} />)
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
