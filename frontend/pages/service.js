import Layout from '../components/Layout.js';
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import PageWrapper from '../components/PageWrapper.js';
import Menu from '../components/Menu.js';
import { Config } from '../config.js';

class Service extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
    );
    const service = await res.json();
    return { service };
  }

  render() {
    if (!this.props.service.title) return <Error statusCode={404} />;
    console.log('boo, it is me');

    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <h1>{this.props.service.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.service.content.rendered,
          }}
        />
      </Layout>
    );
  }
}

export default PageWrapper(Service);
