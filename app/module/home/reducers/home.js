import {
    GET_CATEGORIES,
    IS_LOADING,
    REFRESH,
    ERROR
} from '../actions/home';

const initialState = {
    items: [],
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES: {
            return Object.assign({}, state, {
                items: [...state.items, ...action.items],
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