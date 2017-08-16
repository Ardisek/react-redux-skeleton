import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import { logout } from '../actions/auth';

class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.auth.isLogged,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
