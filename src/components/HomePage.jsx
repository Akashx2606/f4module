import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PostCard from './PostCard';
import Loader from './Loader';

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  if (loading) return <Loader />;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="home-container">
      <h1>Posts</h1>
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

