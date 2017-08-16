import Api from '../../application/services/api';
import _ from 'lodash';
import { errorHandler } from '../../application/utils/errorHandler';


const namespace = 'USERS'
export const
    GET_USERS = `GET_USERS_${namespace}`,
    CLEAR_USERS = `CLEAR_USERS_${namespace}`,
    IS_LOADING = 'IS_LOADING',
    ERROR = `ERROR_${namespace}`;

const onError = (err) => {
    return dispatch => {
        dispatch({
            type: ERROR
        });
    };
};

const getParams = state => {
    const {
        users,
    } = state;
    return Object.assign(
        {},
        users.defaultParams,
    );
};

const getList = (location, state) => {
    const params = getParams(state);
    params.categoryId = location.slice(11);
    return Api.get('user/profile', params);
};

export const getUsers = location => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(isLoading());
        getList(location, state).then(results => {
            dispatch({
                type: GET_USERS,
                items: _.get(results, 'documents', []),
                category: results.category
            });
        }).catch(err => {
            dispatch(onError(_.get(err, 'message', err)));
        });
    }
}

export const clearUsers = () => {
    return {
        type: CLEAR_USERS
    }
}

export const isLoading = () => {
    return {
        type: IS_LOADING
    }
}