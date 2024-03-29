import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

interface IApolloSettingProps {
    children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
    const client = new ApolloClient({
        uri: "http://backendonline.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(), // 나중에 하기
    });
    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
