import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PostCard = ({ post }) => {
    return (
        <div className={"post-card "}>
            <h1 className="text-center header-post">{post.title}</h1>
            <p class="climate"> {post.body}</p>
            <p className="readmorep"><Link to={'/posts/' + post.id} className="btn btn-success">Read More.</Link></p>
            {post.id}

         

         


        </div>


    );
};

PostCard.propTypes = {

};

export default PostCard;