import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/login';
import { login } from '../actions/auth';

class LoginContainer extends Component {
    render() {
        return (
            <Login {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.auth.message,
        isLogged: state.auth.isLogged,
        errors: state.auth.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {
            dispatch(login(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
