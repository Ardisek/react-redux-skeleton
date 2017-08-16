import Api from '../../application/services/api';
import _ from 'lodash';
import { errorHandler } from '../../application/utils/errorHandler';


const namespace = 'USER'
export const
    REGISTER = `REGISTER_${namespace}`,
    CLEAR_REGISTER = `CLEAR_REGISTER_${namespace}`,
    ERROR = `ERROR_${namespace}`;

const onError = err => {
    return dispatch => {
        dispatch({ type: ERROR });
    };
};

export const registerUser = data => {
    return dispatch => {
        Api.post('user/user', data).then(result => {
            //todo: wysylka e-mail potwierdzajacego
            if (result.success) {
                dispatch({ type: REGISTER });
            } else {
                dispatch(onError());
            }
        }).catch(err => {
            dispatch(onError(_.get(err, 'message', err)));
        });
    }
}

export const clearRegister = () => {
    return dispatch => {
        dispatch({ type: CLEAR_REGISTER });
    }
}