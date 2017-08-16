import React, { Component } from 'react';
import { connect } from 'react-redux';
import Announcements from '../components/announcements';
import { getAnnouncements, clearAnnouncements } from '../actions/announcements';

class AnnouncementsContainer extends Component {
    render() {
        return (
            <Announcements {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.announcements.items,
        isLoading: state.announcements.isLoading,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAnnouncements: () => {
            dispatch(getAnnouncements());
        },
        clearAnnouncements: () => {
            dispatch(clearAnnouncements());
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementsContainer);