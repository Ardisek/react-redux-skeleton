import Api from '../../application/services/api';
import _ from 'lodash';
import { errorHandler } from '../../application/utils/errorHandler';


const namespace = 'HOME'
export const
    GET_CATEGORIES = `GET_CATEGORIES_${namespace}`,
    IS_LOADING = `IS_LOADING_${namespace}`,
    ERROR = `ERROR_${namespace}`;

const onError = (err) => {
    return dispatch => {
        dispatch({
            type: ERROR
        });
    };
};

export const getCategories = () => {
    return dispatch => {
        dispatch(isLoading());
        Api.get('user/category').then(results => {
            dispatch({
                type: GET_CATEGORIES,
                items: _.get(results, 'documents', []),
            });
        }).catch(err => {
            dispatch(onError(_.get(err, 'message', err)));
        });
    }
}

export const isLoading = () => {
    return {
        type: IS_LOADING
    }
}