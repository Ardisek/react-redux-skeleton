import React, { Component } from 'react';

class RegisterSuccess extends Component {

    componentWillMount() {
        if (this.props.registerSuccess !== true) {
            this.props.history.push('/');
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.registerSuccess !== true) {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.clearRegister();
    }

    render() {
        return (
            <div className="col-md-12">
                <h1 className="text-center"> Pomyślnie zarejestrowano </h1>
            </div>
        );
    }
}


export default RegisterSuccess;