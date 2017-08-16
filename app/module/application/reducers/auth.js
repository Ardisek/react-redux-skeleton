import { LOGIN, LOGOUT, AUTH_USER, SET_ROLE, AUTH_ERROR } from '../actions/auth';

const initialState = {
    id: '',
    error: '',
    message: '',
    isLogged: false,
    isLoading: false,
    role: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }
        case LOGOUT: {
            return Object.assign({}, state, {
                id: '',
                isLogged: false,
                isLoading: false,
                role: ''
            });;
        }
        case AUTH_USER: {
            return Object.assign({}, state, {
                id: action.id,
                isLogged: true,
                isLoading: false,
                role: action.role,
                message: '',
                error: ''
            });
        }
        case SET_ROLE: {
            return Object.assign({}, state, {
                role: action.role,
            });
        }
        case AUTH_ERROR: {
            return Object.assign({}, state, {
                error: action.payload,
                isLoading: false
            });
        }
        // case FORGOT_PASSWORD_REQUEST: {
        //     return Object.assign({}, state, {
        //         message: action.payload.message
        //     });
        // }
        default:
            return state;
    }
}

