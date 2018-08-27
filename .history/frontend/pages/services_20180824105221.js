import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";
import Index from "/pages/Index.js";


class Services extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
        );
        const services = await res.json();
        return { services };
    }

    render() {

        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />
                <div
                    dangerouslySetInnerHTML={{ __html: services.title.rendered }} />

                />
            </Layout>
        );
    }
}

export default PageWrapper(Services);
