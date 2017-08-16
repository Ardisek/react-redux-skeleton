import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterSuccess from '../components/registerSuccess';
import { clearRegister } from '../actions/register';

class RegisterSuccessContainer extends Component {
    render() {
        return (
            <RegisterSuccess {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        registerSuccess: state.register.registerSuccess,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearRegister: () => {
            dispatch(clearRegister());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSuccessContainer);