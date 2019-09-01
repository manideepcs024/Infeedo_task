import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoaderComponent from './LoaderComponent';
import * as utilFunctions from '../../components/common/utils';
import * as utilActions from '../common/utils';


const Header = ({ loading, userDetails }) => {
    const a = utilActions.getLoginStatus();
    function showHeader() {
        if (JSON.parse(utilFunctions.getLoginStatus())) {
            return true;
        } else {
            return false;
        }


    }
    function deletelogin(){
        utilActions.deleteLoginStatus();
    }
    return (
        <div className="container">
            <nav className="text-center">
                
                <Link to="/posts">Home</Link>
                {a==="true" ? <Link to="/login" onClick={deletelogin}> Log out </Link> : ''}
                
            </nav>
        </div>


    );


};

export default Header;