import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    Redirect
} from 'react-router-dom';
import { renderField } from '../../application/components/fields';

const validate = (formProps) => {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Uzupełnij email';
    }

    if (!formProps.password) {
        errors.password = 'Uzupełnij hasło';
    }

    if (!formProps.password2) {
        errors.password2 = 'Uzupełnij hasło';
    }
    return errors;
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderAlert = this.renderAlert.bind(this);
    }

    componentDidMount() {
        if (this.props.isLogged) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate() {
        if (this.props.isLogged) {
            this.props.history.push('/');
        }
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div>
                    <span><strong>Error!</strong> {this.props.errorMessage}</span>
                </div>
            );
        }
    }

    onSubmit(formData) {
        this.props.registerUser(formData);
        // this.props.history.goBack();
    }

    render() {
        const { registerSuccess } = this.props;

        if (registerSuccess === true) {
            return (
                <Redirect to="/zarejestrowano" />
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <p className="heading"> Rejestracja </p>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <p className="text-label"> Zwykłe </p>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            {this.renderAlert}
                            <div className="row">
                                <div className="col-md-12">
                                    <Field
                                        name="email"
                                        placeholder="E-mail"
                                        component={renderField}
                                        type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Field
                                        name="password"
                                        placeholder="Hasło"
                                        component={renderField}
                                        type="password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Field
                                        name="password2"
                                        placeholder="Powtórz hasło"
                                        component={renderField}
                                        type="password" />
                                </div>
                            </div>
                            <button type="submit" className="blue-button">Rejestracja</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <p className="text-label"> Facebook </p> 
                        <button className="blue-button">Zaloguj przez Facebooka</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'register',
    validate,
})(Register);