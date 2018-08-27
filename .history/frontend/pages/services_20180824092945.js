import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Services extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/slug=services`
        );
        const post = await res.json();
        return { post };
    }
    vdghsvcshjbdcjh
    render() {
        if (!this.props.page.title) return <Error statusCode={404} />;

        return (

            <Layout>
                <h1>{this.props.page.title.rendered}</h1>
                <div

                />
                <h4 className="card-title">{this.state.service.titre}</h4>

            </Layout>
        );
    }
}

export default PageWrapper(Services);
