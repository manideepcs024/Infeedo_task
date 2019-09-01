import React, { PropTypes, context } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as LoginActions from '../../actions/userLoginActions';
import * as postActions from '../../actions/postsActions';

class PostDetails extends React.Component {

    constructor(props) {
        super(props, context);
        this.state = {
            comments: [],
            count: 10,
            currentIndex: 0
        };
        // this.onChange = this.onChange.bind(this);
        // this.onSave = this.onSave.bind(this);
        this.deleteme = this.deleteme.bind(this);
        this.loadmore = this.loadmore.bind(this);

    }
    onSave(event) {
        // event.preventDefault();
    }
    onChange(event) {
    }
    loadmore(){
        this.setState({count: this.state.count + 10});

    }
    componentDidMount() {
        this.props.dispatch(postActions.loadPostDetail(this.props.params.id));
        this.props.dispatch(postActions.loadPostComments(this.props.params.id));

    }
    deleteme(){
        this.props.dispatch(postActions.deletePost(this.props.params.id));
        // browserHistory.replace("/posts");
        this.context.router.push('/posts');
    }
    componentDidUpdate() {
    }
    render() {
        const { postDetail, comment } = this.props;
        return (

            <div className="jumbotrom">
                <h1 className="text-center">Posts Details Page  </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-danger" onClick = {this.deleteme} >Delete</button>
                            <h4 className="text-center">   {postDetail.title}</h4>
                            <p className="text-center"> {postDetail.body} </p>
                          


                        </div>
                    </div>
                    <div className="row">
                       
                        {comment    ? (comment.slice(0, this.state.count).map(comment =>

<div className="col-md-4 ">
    
    <div className="post-card ">
                       <p>{comment.name}</p>
                       <p>{comment.email}</p>
                       <p>{comment.body}</p>
                       {comment.id}

                       </div>
                       </div>
                        )) : ""}


                      
                    </div>
<button className="load btn btn-success" onClick={this.loadmore} >Load More</button>

                </div>



            </div>

        );
    }


}
PostDetails.contextTypes = {
	router: PropTypes.object

};

function mapStateToProps(state, ownProps) {
    return {
        postDetail: state.posts.postDetail,
        comment: state.posts.comment
    };

}
export default connect(mapStateToProps)(PostDetails);





