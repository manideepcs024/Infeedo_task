import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import LoginPage from './components/user/loginsPage';
import LoggedIn from './components/common/LoggedIn';
import PostPage from './components/posts/PostPage';
import PostDetails from './components/posts/PostDetails';


export default (
        <Route path="/" component={App}>
                <IndexRoute component={LoggedIn} />
                <Route path="login" component={LoginPage} />

                <Route component={LoggedIn}>
                        <Route path="posts" component={PostPage} />
                        <Route path="posts/:id" component={PostDetails} />

                </Route>
        </Route>

);