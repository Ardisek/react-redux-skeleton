import {
    GET_USERS,
    CLEAR_USERS,
    IS_LOADING,
    ERROR
} from '../actions/users';

const initialState = {
    items: [],
    category: '',
    isLoading: false,
    defaultParams: {
        'sort[name]': 'asc',
        active: true,
        limit: 25,
        start: 0,
        select: 'name,address.city,url,description,avatar'
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return Object.assign({}, state, {
                items: [...state.items, ...action.items],
                category: action.category,
                isLoading: false
            });
        }
        case CLEAR_USERS: {
            return Object.assign({}, state, {
                items: [],
                category: '',
                isLoading: false,
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