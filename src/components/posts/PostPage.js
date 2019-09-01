import React, { PropTypes, context } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import LoaderComponent from '../common/LoaderComponent';
import * as postActions from '../../actions/postsActions';
import PostCardList from './PostCardList';


class PostPage extends React.Component {

    constructor(props) {
        super(props, context);
        this.state = {
        };

    }
    onSave(event) {

    }
    onChange(event) {
    }
    onClickMe(planet) {

    }

    componentDidMount() {
    }
    componentDidUpdate() {
    }
    render() {
        const {posts, loading} = this.props;
        let newPost = Object.values(posts);
        return (
            <div className="container">
                <div className="jumbotrom">
                    <h1 className="text-center"> Posts </h1>
                    {loading > 0 && loading ? <LoaderComponent /> : ''}
                        {newPost    ? (newPost.map(post =>
                        <PostCardList key={post.id} post = {post} />

                        )) : ""}


                </div>

            </div>

        );
    }


}

function mapStateToProps(state, ownProps) {
    return {
        // planets: state.planets,
        loading: state.ajaxCalls,
        posts: state.posts.posts
    };

}
export default connect(mapStateToProps)(PostPage);





