import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

import getTrimmedFollowingUrl from './getTrimmedFollowingUrl.js';

export default function getUserFields() {
  return {
    login: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLInt,
    },
    "avatar_url": {
      type: GraphQLString,
    },
    "site_admin": {
      type: GraphQLBoolean
    },
    "public_repos": {
      type: GraphQLInt,
    },
    email: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    followingUrl : {
      type: GraphQLString,
      resolve: ({ following_url }) => getTrimmedFollowingUrl(following_url),
    },
  };
}
