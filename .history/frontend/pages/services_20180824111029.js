import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";
import Index from "./index.js";

class Services extends Component {
    constructor() {
        super();
        this.state = {
            services: [],
        };
    }

    componentDidMount() {
        const { apiRoute, slug } = this.props.url.query;
        fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`

        )
            .then(res => res.json())
            .then(res => {
                this.setState({
                    services: res
                });
            });
    }

    render() {
        if (
            this.state.post &&
            this.state.post.code &&
            this.state.post.code === "rest_cookie_invalid_nonce"
        )
            return <Error statusCode={404} />;

        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />

            </Layout>
        );
    }
}

export default PageWrapper(Services);