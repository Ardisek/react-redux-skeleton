import 'whatwg-fetch';
import { errorHandler } from '../utils/errorHandler';
export const API_URL = 'http://localhost:3000/';
export const CLIENT_ROOT_URL = 'http://localhost:8080';
import {
    Redirect,
} from 'react-router-dom';

class Api {

    constructor() {
        this.headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        };
    }

    get(route, params) {
        if (params) {
            const tmp = [];
            for (const key in params) {
                tmp.push(`${key}=${params[key]}`);
            }
            route += '?' + tmp.join('&');
        }
        return this.xhr(route, null, 'GET');
    }

    put(route, params) {
        return this.xhr(route, params, 'PUT');
    }

    post(route, params) {
        return this.xhr(route, params, 'POST');
    }

    delete(route, params) {
        return this.xhr(route, params, 'DELETE');
    }

    xhr(route, params, verb, isAuthReq, responseType = 'json') {
        const url = `${API_URL}${route}`;
        const options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
        options.headers = this.headers;
        if (verb === 'POST' || verb === 'PUT') {
            options.headers = {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json, text/plain'
            };
        }

        if (localStorage.token) {
            options.headers['Authorization'] = localStorage.token;
        }

        return fetch(url, options)
            .then(response => {
                switch (response.status) {
                    case 200:
                    case 201:
                    case 422:
                        if (responseType === 'json') {
                            return response.json();
                        }
                        if (responseType === 'text') {
                            return response.text();
                        }
                        return response.json(); //default, just in case ;)
                    case 401:
                        localStorage.removeItem("token");
                        //todo: dispatch logout
                        errorHandler(err.response);
                    default:
                        return Promise.reject(new Error(response.status));
                }
            }).catch(err => {
                errorHandler(err);
            });
    }
}

export default new Api();