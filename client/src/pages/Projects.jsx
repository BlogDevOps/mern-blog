import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if using react-router-dom
import PostCard from '../components/PostCard'; // Import PostCard component

export default function Projects({ posts }) { // Ensure posts are passed as props
  return (
    <div>
      <Link
        to='/search'
        className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
      >
        View all posts
      </Link>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to='/search'
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
