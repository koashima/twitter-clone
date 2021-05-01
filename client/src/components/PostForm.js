import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from '../utils/hooks';
import { FETCH_POSTS_QUERY } from '../utils/graphql';

const PostForm = () => {
  const { onChange, handleSubmit, values } = useForm(() => createPost(), {
    body: '',
  });

  const [createPost, { error }] = useMutation(CREATE_POST, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: {
          getPosts: [result.data.createPost, ...data.getPosts],
        },
      });
      values.body = '';
    },
    variables: values,
    errorPolicy: 'all',
  });

  return (
    <form onSubmit={handleSubmit} action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="flex-col rounded-md">
        <div className="rounded-md flex-grow shadow-sm">
          <label htmlFor="post" className="sr-only"></label>
          <input
            id="post"
            name="body"
            type="text"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded :outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
            placeholder={
              error ? error.graphQLErrors[0].message : "What's happening?!"
            }
            value={values.body}
            onChange={onChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 mt-2 mb-5 text-base font-medium rounded-full text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Squawk!
          </button>
        </div>
      </div>
    </form>
  );
};

const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      username
      createdAt
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default PostForm;
