import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

class Home extends Component {


    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.items.length === 0) {
            this.props.getCategories();
        }
    }
    
    render() {
        const {
            items,
            isLoading
        } = this.props;


        //not used because we dont have any api
        const categories = items.map((item) => {
            return (
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <div className="category">
                        <Link to={`/kategoria/${item.url}`}>
                            <img src={item.avatar} className="w100" />
                            <div className="portfolio-box-caption"></div>
                            <div className="category-name text-center">
                                <p className="list-group-item-heading">{item.name}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <div id="carousel-example-generic" className="carousel slide">
                    <div className="carousel-caption">
                        <h1>Home</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
