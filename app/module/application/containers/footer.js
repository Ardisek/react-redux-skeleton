import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom';

class FooterTemplate extends Component {
    render() {
        const d = new Date();
        const year = d.getFullYear();

        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <div className="row footerLinks mt20">
                                <Link to="/kontakt">CONTACT</Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 text-center mt20">
                            © {year}
                        </div>
                    </div>
                </div>
            </footer>


        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated,
    };
}

export default connect(mapStateToProps)(FooterTemplate);
