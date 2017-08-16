import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Announcements extends Component {

    componentDidMount() {
        if (this.props.items.length === 0) {
            this.props.getAnnouncements();
        }
    }

    render() {
        const {
            items,
            isLoading
        } = this.props;

        const announcements = items.map((item) => {
            return (
                <div className="col-md-2">
                    <Link to={`/ogloszenie/${item.url}`} className="list-group-item active">
                        <h4 className="list-group-item-heading">{item.name}</h4>
                        <p className="list-group-item-text">{item.description}</p>
                    </Link>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="list-group row">
                    {/* {announcements} */}
                    <div className="col-md-3">
                        <Link to={'/'} className="list-group-item active">
                            <h4 className="list-group-item-heading">lorem</h4>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quaerat libero, eum facilis a blanditiis aliquid modi sequi fugit maiores.</p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/'} className="list-group-item active">
                            <h4 className="list-group-item-heading">lorem</h4>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quaerat libero, eum facilis a blanditiis aliquid modi sequi fugit maiores.</p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/'} className="list-group-item active">
                            <h4 className="list-group-item-heading">lorem</h4>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quaerat libero, eum facilis a blanditiis aliquid modi sequi fugit maiores.</p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/'} className="list-group-item active">
                            <h4 className="list-group-item-heading">lorem</h4>
                            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quaerat libero, eum facilis a blanditiis aliquid modi sequi fugit maiores.</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Announcements;