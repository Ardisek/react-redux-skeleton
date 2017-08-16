import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/home';
import { getCategories } from '../actions/home';

class HomeContainer extends Component {
    render() {
        return (
            <Home {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.home.items,
        isLoading: state.home.isLoading,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategories: () => {
            dispatch(getCategories());
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);