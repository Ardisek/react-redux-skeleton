import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../components/users';
import { getUsers, clearUsers } from '../actions/users';

class UsersContainer extends Component {
    render() {
        return (
            <Users {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.users.items,
        category: state.users.category,
        isLoading: state.users.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: (location) => {
            dispatch(getUsers(location));
        },
        clearUsers: () => {
            dispatch(clearUsers());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);