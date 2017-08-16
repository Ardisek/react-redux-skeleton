import { logout } from '../actions/auth';

export const errorHandler = (error, type, dispatch) => {
    let errorMessage = error.response ? error.response.data : error.message;

    if (error.status === 404 && errorMessage === 404) {
        return logout();
    }
    if (error.status === 401) {
        errorMessage = 'You are not authorized to do this.';
        return logout();
    }
}
