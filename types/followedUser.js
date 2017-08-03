import { GraphQLObjectType, GraphQLInt } from 'graphql';

import getUserFields from './utilities/getUserFields.js'

const FollowedUser = new GraphQLObjectType({
  name: "FollowedUser",
  description: "Basic info on a github user that our main user is following.",
  fields: getUserFields(),
});

export default FollowedUser;
