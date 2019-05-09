import withApollo from 'next-with-apollo';  // a high-order component that will expose our ApolloClient. Nextjs(SSR)特有のライブラリ
import ApolloClient from 'apollo-boost';    // apolloclient + some extra functions ツールがセットになったApolloCliient
import { endpoint, prodEndpoint } from '../config';       

// Client をreturn
function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,  // ClientのURL
    request: operation => {   // like a express middleware
      operation.setContext({
        fetchOptions: {
          credentials: 'include',   // JWTが存在したらそれもBackendに送信する
        },
        headers,
      });
    },

   
  });
}

export default withApollo(createClient);


/**
 * Apollo client is a a kind of database that is in the client
 */