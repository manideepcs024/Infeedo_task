import { combineReducers } from 'redux';
import ajaxCallInProgressdcdcd from './ajaxStatusReducer';
import loginuser from './loginReducer';
import posts from './postReducer';

const rootReducer = combineReducers({
    loginuser: loginuser,
    posts: posts,
    ajaxCalls: ajaxCallInProgressdcdcd

});

export default rootReducer;