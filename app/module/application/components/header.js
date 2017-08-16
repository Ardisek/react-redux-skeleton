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
        //rendered header depends on login status
        if (this.props.isLogged) {
            return (
                <div className="container">
                    <div className="col-sm-5 col-sm-push-7 col-md-4 col-md-push-8 col-xs-12 text-right dark-header-link">
                        <a className="socials" href="/" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <NavLink activeClassName="navbar-active" to="/konto">MY ACCOUNT </NavLink>
                        <Link onClick={this.logout} to="/">| LOGOUT</Link>
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
                        <NavLink activeClassName="navbar-active" to="/zaloguj">SIGN IN </NavLink>
                        <NavLink activeClassName="navbar-active" to="/rejestracja">| SIGN UP</NavLink>
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
                                    <NavLink exact activeClassName="navbar-active" to="/ogloszenia">ANNOUNCEMENTS</NavLink>
                                </li>
                                <li key={2}>
                                    <NavLink exact activeClassName="navbar-active" to="/uzytkownicy">USERS</NavLink>
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
