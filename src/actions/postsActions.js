import * as URL from '../constants/constantValue';
import * as actionTypes from '../constants/actionTypes';
import {beginAJAXcall} from '../actions/ajaxCallActions';

export function loadPostsSuccess(post) {
    return { type: actionTypes.POST_RESULT_SUCCESS, payload: {posts: post } };
}
export function loadPostDetailSuccess(postDetail){
    return {type: actionTypes.POST_DETAIL_SUCCESS, payload: {postDetail: postDetail}};
}
export function deletePostSuccess(id){
    return {type: actionTypes.POST_DELETE_SUCCESS, payload: {id: id}};
}
export function loadCommentPostDetailSuccess(comment){
    return {type: actionTypes.POST_DETAIL_COMMENT_SUCCESS, payload: {comment: comment}};
}

export function loadPost() {
    return function (dispatch) {
        dispatch(beginAJAXcall());
        let API_URL = URL.New_API_URL + 'posts';
        fetch(API_URL)
            .then(function (response) {
                response.json().then(body => {
                    return dispatch(loadPostsSuccess(body));

                });

            }).then(function (myJson) {

            });

    };
}

export function loadPostDetail(id){
    return function(dispatch) {
        dispatch(beginAJAXcall());
        let API_URL = URL.New_API_URL + 'posts/' + id;
        fetch(API_URL).then(function(response){
            response.json().then(body =>{
                return dispatch(loadPostDetailSuccess(body));
            })

        });
    }
}
export function deletePost(id){
    return function(dispatch){
        dispatch(beginAJAXcall());
        return dispatch(deletePostSuccess(id));
    }
}
export function loadPostComments(id){
    return function(dispatch) {
        dispatch(beginAJAXcall());
        let API_URL = URL.New_API_URL + 'posts/' + id +'/comments';
        fetch(API_URL).then(function(response){
            response.json().then(body =>{
                return dispatch(loadCommentPostDetailSuccess(body));
            })

        });
    }
}