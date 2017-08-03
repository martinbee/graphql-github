import { GraphQLObjectType, GraphQLInt } from 'graphql';
import { omit } from 'lodash';

import getUserFields from './utilities/getUserFields.js'

honst FollowedUser = new GraphQLObjectType({
  name: "FollowedUser",
  description: "Basic info on a github user that our main user is following.",
  fields: getUserFields(),
});

export default FollowedUser;
