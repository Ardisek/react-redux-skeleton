import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { sendContactForm } from '../services/api';
import { renderField, textArea } from './fields';

class ContactPage extends Component {

    handleFormSubmit({ firstName, lastName, emailAddress, subject, message }) {
        this.props.sendContactForm({ firstName, lastName, emailAddress, subject, message });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    renderMessage() {
        if (this.props.message) {
            return (
                <div className="alert alert-success">
                    <strong>Success!</strong> {this.props.message}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, fields: { firstName, lastName, emailAddress, subject, message } } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <p className="heading">Kontakt</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="heading2"> Address info </p>
                        <p className="heading2"> Address info </p>
                        <p className="heading2"> Address info </p>
                        <p className="heading2"> Address info </p>
                        <p className="heading2"> Address info </p>
                    </div>
                    <div className="col-md-6 col-md-push-2">

                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            {this.renderMessage()}
                            <div className="row">
                                <div className="col-md-6">
                                    <Field
                                        name="firstName"
                                        placeholder="Imię"
                                        component={renderField}
                                        type="text" />
                                </div>

                                <div className="col-md-6 text-right">
                                    <Field
                                        name="lastName"
                                        placeholder="Nazwisko"
                                        component={renderField}
                                        type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Field
                                        name="email"
                                        placeholder="E-mail"
                                        component={renderField}
                                        type="text" />
                                </div>

                                <div className="col-md-6 text-right">
                                    <Field
                                        name="topic"
                                        placeholder="Temat"
                                        component={renderField}
                                        type="text" />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-12">
                                    <Field
                                        placeholder="Wiadomość"
                                        component={textArea}
                                        type="text" />
                                </div>
                            </div>
                            {this.renderAlert()}
                            <div className="row text-right">
                            <div className="col-md-12">
                            <button action="submit" className="yellow-button">Wyślij wiadomość</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.communication.error,
        message: state.communication.message,
        authenticated: state.auth.authenticated
    };
}

export default reduxForm({
    form: 'contactForm',
    fields: ['firstName', 'lastName', 'emailAddress', 'subject', 'message'],
}, mapStateToProps, { sendContactForm })(ContactPage);
