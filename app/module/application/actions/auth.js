import Api from '../services/api';
import { errorHandler } from '../utils/errorHandler';

const namespace = 'AUTH';
export const LOGIN = `LOGIN_AUTH_${namespace}`;
export const LOGOUT = `LOGOUT_${namespace}`;
export const AUTH_USER = `AUTH_USER_${namespace}`;
export const SET_ROLE = `SET_ROLE_${namespace}`;
export const AUTH_ERROR = `AUTH_ERROR_${namespace}`;

export const login = data => {
    return dispatch => {
        dispatch({
            type: LOGIN
        });
        return Api.post(`auth/login`, data)
            .then(response => {
                if (response.success) {
                    localStorage.token = response.token;
                    dispatch({
                        type: AUTH_USER,
                        role: response.role,
                        id: response.id,
                    });
                } else {
                    dispatch({
                        type: AUTH_ERROR
                    });
                }
            })
            .catch(e => {
                dispatch({ type: AUTH_ERROR });
                // errorHandler(dispatch, e.response, AUTH_ERROR);
            });
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("token");
}


export const checkIsLogged = () => {
    return Api.get(`auth/check`, null);
}