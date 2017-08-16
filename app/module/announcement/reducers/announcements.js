import {
    GET_ANNOUNCEMENTS,
    CLEAR_ANNOUNCEMENTS,
    IS_LOADING,
    REFRESH,
    ERROR
} from '../actions/announcements';

const initialState = {
    items: [],
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ANNOUNCEMENTS: {
            return Object.assign({}, state, {
                items: [...state.items, ...action.items],
                isLoading: false
            });
        }
        case CLEAR_ANNOUNCEMENTS: {
            return Object.assign({}, state, {
                items: [],
                isLoading: false
            });
        }
        case IS_LOADING: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }
        case ERROR: {
            return Object.assign({}, state, {
                isLoading: false
            });
        }
        default:
            return state;
    }
} 