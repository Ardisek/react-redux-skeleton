import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { renderField } from './fields';

const validate = (formProps) => {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Uzupełnij email';
    }

    if (!formProps.password) {
        errors.password = 'Uzupełnij hasło';
    }
    return errors;
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(formData) {
        this.props.login(formData);
    }

    renderApiErrors() {
        if (this.props.errors) {
            return (
                <div>
                    <span><strong>Error!</strong> {this.props.errors}</span>
                </div>
            );
        }
    }

    render() {


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="heading"> Logowanie </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-label"> Zwykłe </p>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div>
                                <Field
                                    name="email"
                                    placeholder="E-mail"
                                    component={renderField}
                                    type="text" />
                            </div>
                            <div>
                                <Field
                                    name="password"
                                    placeholder="Hasło"
                                    component={renderField}
                                    type="password" />
                            </div>
                            <button type="submit" className="blue-button">Zaloguj</button>
                        </form>
                        Zalogowanie oznacza akceptację <Link to="/regulamin"><u>Regulaminu</u></Link>. <Link to="/przypomnij-haslo">Nie pamiętam hasła.</Link>
                    </div>
                    <div className="col-md-6">
                        <p className="text-label"> Facebook </p>
                        <button className="blue-button">Zaloguj przez Facebooka</button>
                    </div>
                </div>
                {this.renderApiErrors()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    validate,
})(Login);
