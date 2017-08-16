import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    renderLinks() {
        if (this.props.isLogged) {
            return (
                <div className="container">
                    <div className="col-sm-5 col-sm-push-7 col-md-4 col-md-push-8 col-xs-12 text-right dark-header-link">
                        <a className="socials" href="/" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <NavLink activeClassName="navbar-active" to="/konto">MOJE KONTO </NavLink>
                        <Link onClick={this.logout} to="/">| WYLOGUJ</Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="col-sm-5 col-sm-push-7 col-md-4 col-md-push-8 col-xs-12 text-right dark-header-link">
                        <a className="socials" href="/" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <NavLink activeClassName="navbar-active" to="/zaloguj">LOGOWANIE </NavLink>
                        <NavLink activeClassName="navbar-active" to="/rejestracja">| REJESTRACJA</NavLink>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="header-dark">
                        {this.renderLinks()}
                    </div>

                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link className="navbar-brand" to="/">{this.props.logo}</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="nav-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li key={1}>
                                    <NavLink exact activeClassName="navbar-active" to="/ogloszenia">OGŁOSZENIA</NavLink>
                                </li>
                                <li key={2}>
                                    <NavLink exact activeClassName="navbar-active" to="/uzytkownicy">UŻYTKOWNICY</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
