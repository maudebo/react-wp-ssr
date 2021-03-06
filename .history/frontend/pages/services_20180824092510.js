import Layout from "../components/Layout.js";
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
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=services`
        );
        const post = await res.json();
        return { post };
    }

    render() {
        if (!this.props.page.title) return <Error statusCode={404} />;

        return (
            console.log(this.state);
        <Layout>
            <Menu menu={this.props.headerMenu} />
            <h1>{this.props.page.title.rendered}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: this.props.page.content.rendered
                }}
            />
        </Layout>
        );
    }
}

export default PageWrapper(Services);
