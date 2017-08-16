import React, { Component } from 'react';
import { connect } from 'react-redux';
import Register from '../components/register';
import { registerUser } from '../actions/register';

class RegisterContainer extends Component {
    render() {
        return (
            <Register {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.auth.isLogged,
        registerSuccess: state.register.registerSuccess
    };
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (data) => {
            dispatch(registerUser(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
