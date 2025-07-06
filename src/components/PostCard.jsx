import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const slicedTitle = post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title;
    const slicedBody = post.body.length > 80 ? post.body.slice(0, 80) + " Read more..." : post.body;

    return (
        <div className="post-card">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
            <h3>{slicedTitle}</h3>
            <p>{slicedBody}</p>
            <Link to={`/item/${post.id}`} className="read-more">View Details</Link>
        </div>
    );
};

export default PostCard;
