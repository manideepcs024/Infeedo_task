// import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

const initalState = {
    posts: [],
    postDetail: {},
    comment: []
}

export default function postReducer(state = initalState, action) {
    switch (action.type) {
        case actionTypes.POST_RESULT_SUCCESS:
            return Object.assign(state, action.payload);

        // case action.PLANET_SINGLE_DETAIL_SUCCES:
        // return action.payload;
        case actionTypes.POST_DETAIL_SUCCESS:

            return Object.assign(state, action.payload);
        case actionTypes.POST_DELETE_SUCCESS:
            let posts = state.posts;
            let c = posts.filter((post) => {
                return post.id != action.payload.id
            });
            return Object.assign(state, { posts: c });
        // return Object.assign(state, aaa);
        case actionTypes.POST_DETAIL_COMMENT_SUCCESS:
            return Object.assign(state, action.payload);
        default:
            return state;

    }

}

