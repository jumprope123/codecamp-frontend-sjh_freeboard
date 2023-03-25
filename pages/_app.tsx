import type { AppProps } from "next/app";
import Layout from "../src/commons/layouts";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloSetting>
            <>
                <Global styles={globalStyles} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        </ApolloSetting>
    );
}
