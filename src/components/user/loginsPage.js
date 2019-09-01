import React, { PropTypes, context } from 'react';
import LoginForm from './loginForm';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as LoginActions from '../../actions/userLoginActions';
import * as utilActions from '../common/utils';

class LoginPage extends React.Component {

    constructor(props) {
        super(props, context);
        this.state = {
            userDetails: {
                username: 'mani',
                password: '1',
                redirectState: false
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.redirect = this.redirect.bind(this);

    }
    redirect() {
    }
    onSave(event) {
        event.preventDefault();
        this.props.dispatch(LoginActions.loginDetailsFetchRequest(this.state.userDetails));

    }
    onChange(event) {
        let user = this.state.userDetails;
        const field = event.target.name;
        user[field] = event.target.value;
        this.setState({ userDetails: user });
    }
    componentDidMount() {
        utilActions.deleteLoginStatus();
    }
    componentDidUpdate() {
        let lstatus = utilActions.getLoginStatus();
        if (lstatus === 'true') {
            browserHistory.replace("/posts");
        }
    }
    render() {
        const { validUser, loggedIn } = this.props.userDetails;
        return (

            <div className="jumbotrom">
                <p className="error-me">{this.props.userDetails.message}</p>


                <LoginForm onSave={this.onSave} onChange={this.onChange} userDetails={this.state.userDetails} />


            </div>

        );
    }


}

function mapStateToProps(state, ownProps) {
    return {
        userDetails: state.loginuser
    };

}
LoginPage.contextTypes = {
    router: PropTypes.object

};
export default connect(mapStateToProps)(LoginPage);





