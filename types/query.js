import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import axios from 'axios';

import UserInfo from './userInfo.js';

const query = new GraphQLObjectType({
  name: "Query",
  description: "First GraphQL Server Config — Yay!",
  fields: () => ({
    gitHubUser: {
      type: UserInfo,
      description: "GitHub user API data with enhanced and additional data",
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString),
          description: "The GitHub user login you want information on",
        },
      },
      resolve: (_, { username }) => {
        const url = `https://api.github.com/users/${username}`;

        return axios
          .get(url)
          .then(response => response.data);
      }
    },
  }),
});

export default query;
