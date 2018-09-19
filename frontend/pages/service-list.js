import Layout from '../components/Layout.js';
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import PageWrapper from '../components/PageWrapper.js';
import Menu from '../components/Menu.js';
import { Config } from '../config.js';

class ServiceList extends Component {

    renderServices() {
        console.log(this.props);
        return this.props.services.map((service, i) => {
            return (
                <div className="col-md-4 card-outer" key={i}>
                    <div className="card">
                        <div className="img-outer">
                            <Link to={service.slug}>
                                <img className="card-img-top" src={service.image['url'] ? service.image['url'] : Placeholder} alt="Featured Image" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><Link to={service.slug}>{service.titre}</Link></h4>
                            <p dangerouslySetInnerHTML={{ __html: service.description }} />


                        </div>
                    </div>
                </div>
            )
        });
    }

    renderEmpty() {
        return 'hello'  }

    render() {
        console.log(this.props);
        if (!this.props.service) {
            return 'hello';
        }

        return (
            <div className="services-container">
                {this.props.services.length ?
                    this.renderServices() :
                    this.renderEmpty()
                }
            </div>
        );
    }
}

export default ServiceList;
