import { REGISTER, CLEAR_REGISTER, ERROR } from '../actions/register';
const initialState = {
    registerSuccess: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER: {
            return Object.assign({}, state, {
                registerSuccess: true,
            });
        }
        case CLEAR_REGISTER: {
            return Object.assign({}, state, {
                registerSuccess: '',
            });
        }
        case ERROR: {
            return Object.assign({}, state, {
                registerSuccess: false,
            })
        }
        default:
            return state;
    }
} 