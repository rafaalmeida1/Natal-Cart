import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FormContextProvider } from "../context/FormContext";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "./layout";

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FormContextProvider>
    </>
  );
}
