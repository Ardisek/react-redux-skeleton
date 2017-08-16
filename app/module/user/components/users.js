import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import avatar from '../../../img/avatar-default.png';

class Users extends Component {
    componentDidMount() {
        if (this.props.items.length === 0) {
            this.props.getUsers(this.props.location.pathname);
        }
    }

    componentWillUnmount() {
        this.props.clearUsers();
    }

    render() {
        const {
            items,
            isLoading
        } = this.props;

        const users = this.props.items.map((item) => {
            return (
                <div className="row users-card">
                    <div className="col-md-2 users-avatar">
                        <img src={item.avatar} />
                    </div>
                    <div className="col-md-10">
                        <Link to={`/firma/${item.url}`} className="users-info">
                            <p className="users-name">{item.name}</p>
                            <p className="users-city">{item.address.city}</p>
                            <p className="users-description">{item.description}</p>
                        </Link>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                {/* {users} */}
                <div className="row users-card">
                    <div className="col-md-2 users-avatar">
                        <img src={avatar} />
                    </div>
                    <div className="col-md-10">
                        <Link to={'/'} className="users-info">
                            <p className="users-name">name</p>
                            <p className="users-city">city</p>
                            <p className="users-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem, voluptas ipsum est modi, veniam consequatur inventore. Alias, autem, est.</p>
                        </Link>
                    </div>
                </div>
                <div className="row users-card">
                    <div className="col-md-2 users-avatar">
                        <img src={avatar} />
                    </div>
                    <div className="col-md-10">
                        <Link to={'/'} className="users-info">
                            <p className="users-name">name</p>
                            <p className="users-city">city</p>
                            <p className="users-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem, voluptas ipsum est modi, veniam consequatur inventore. Alias, autem, est.</p>
                        </Link>
                    </div>
                </div>
                <div className="row users-card">
                    <div className="col-md-2 users-avatar">
                        <img src={avatar} />
                    </div>
                    <div className="col-md-10">
                        <Link to={'/'} className="users-info">
                            <p className="users-name">name</p>
                            <p className="users-city">city</p>
                            <p className="users-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem, voluptas ipsum est modi, veniam consequatur inventore. Alias, autem, est.</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Users;