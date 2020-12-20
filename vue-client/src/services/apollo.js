import Vue from 'vue'
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'


const httpLink = new HttpLink({
  uri: `https://${process.env.VUE_APP_HASURA_URI}`,
  headers: {
    'x-hasura-admin-secret': `${process.env.VUE_APP_HASURA_ADMIN_SECRET}`
  }
})

const wsLink = new WebSocketLink({
  uri: `wss://${process.env.VUE_APP_HASURA_URI}`,
  options: {
    timeout: 60000,
    reconnect: true,
    timeout: 30000,
    connectionParams() {
      return {
        headers: {
          'x-hasura-admin-secret': `${process.env.VUE_APP_HASURA_ADMIN_SECRET}`
        }
      }
    }
  }
})

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}, wsLink, httpLink)

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
})

export default apolloProvider