import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Loader from './Loader';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { posts, loading, error } = useSelector(state => state);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  const post = posts.find(p => p.id === parseInt(id));

  if (loading) return <Loader />;
  if (error) return <p className="error">Error: {error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="detail-container">
      <img src={`https://picsum.photos/400?random=${post.id}`} alt="Post" />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>User ID:</strong> {post.userId}</p>
      <Link to="/" className="back-btn">← Back to Home</Link>
    </div>
  );
};

export default DetailPage;

