import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/common/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  console.log("component", Component);
  console.log("pageProps", pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
