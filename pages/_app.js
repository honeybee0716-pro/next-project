import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import "../styles/globals.scss";
import "animate.css";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import App from "next/app";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Head from "next/head";
import { ContextWrapper } from "../common/context/appContext";
import { ToastContainer } from 'react-toastify';
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>The Log Connection</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Log Homes, handcrafted log, hand crafted, custom log homes, loghome, log home design, log home plans"
          />
          <meta
            name="description"
            content="Log homes hand crafted by the Log Connection, industry leading builder of full scribe log homes."
          />
          <meta httpEquiv="CONTENT-LANGUAGE" content="EN" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/CANDARA.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FelixTitling.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/MYRIADAT.ttf"
            as="font"
            crossOrigin=""
          />
          <script src='https://www.google.com/recaptcha/api.js'></script>
        </Head>
        <ContextWrapper>
          <Header></Header>
          <Component {...pageProps} />
          <Footer></Footer>
          <ToastContainer/>
        </ContextWrapper>
      </>
    );
  }
}
