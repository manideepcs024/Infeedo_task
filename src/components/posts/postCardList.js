import React, { PropTypes } from 'react';
import PostCard from './PostCard';

const PostCardList = ({ post }) => {
    return (

        <div className="col-md-4">
           <PostCard  post = {post}/>
        </div>
    );


};

PostCardList.propTypes = {


};

export default PostCardList;