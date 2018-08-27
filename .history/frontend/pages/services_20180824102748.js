import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
            page: 0,
            getServices: true,
            controller: false
        };
        this.getMoreServices = this.getMoreServices.bind(this);
    }

    componentWillUnmount() {
        this.getMoreServices = null;
    }


    getMoreServices() {
        var that = this;
        var totalPages;

        this.setState({ page: this.state.page + 1 });

        fetch(CelestialSettings.URL.api + "services/?page=" + this.state.page)
            .then(function (response) {
                for (var pair of response.headers.entries()) {
                    // getting the total number of pages
                    if (pair[0] == "x-wp-totalpages") {
                        totalPages = pair[1];
                    }

                    if (that.state.page >= totalPages) {
                        that.setState({ getServices: false });
                    }
                }
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (results) {
                var allServices = that.state.services.slice();
                results.forEach(function (single) {
                    allServices.push(single);
                });
                that.setState({ services: allServices });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
            });
    }



    render() {
        if (!this.state.services.length === 0) {
            return <img src={LoadingIcon} alt="loader active gif" id="loader" />;
        }
        return (
            <div>
                <div className="container">
                    <h4 className="card-title">{this.state.service.acf.titre}</h4>
                    <h1 className="services-title">Services</h1>
                </div>
            </div>
        );
    }
}

export default Services;