import Api from '../../application/services/api';
import _ from 'lodash';


const namespace = 'ANNOUNCEMENT'
export const
    GET_ANNOUNCEMENTS = `GET_ANNOUNCEMENTS_${namespace}`,
    CLEAR_ANNOUNCEMENTS = `CLEAR_ANNOUNCEMENTS_${namespace}`,
    IS_LOADING = `IS_LOADING_${namespace}`,
    ERROR = `ERROR_${namespace}`;

const onError = err => {
    return dispatch => {
        dispatch({
            type: ERROR
        });
    };
};

export const getAnnouncements = () => {
    return dispatch => {
        dispatch(isLoading());
        Api.get('announcement/announcement').then(results => {
            dispatch({
                type: GET_ANNOUNCEMENTS,
                items: _.get(results, 'documents', []),
            });
        }).catch(err => {
            dispatch(onError(_.get(err, 'message', err)));
        });
    }
}

export const clearAnnouncements = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_ANNOUNCEMENTS
        })
    }
}

export const isLoading = () => {
    return {
        type: IS_LOADING
    }
}