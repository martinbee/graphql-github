import axios from 'axios';
import { GraphQLObjectType, GraphQLList } from 'graphql';

import getUserFields from './utilities/getUserFields.js'
import getTrimmedFollowingUrl from './utilities/getTrimmedFollowingUrl.js';
import FollowedUser from './followedUser.js';

const UserInfo = new GraphQLObjectType({
  name: "UserInfo",
  description: "Basic info on a github user.",
  fields: {
    ...getUserFields(),
    followedUsers: {
      type: new GraphQLList(FollowedUser),
      resolve: ({ following_url }) => {
        const url = getTrimmedFollowingUrl(following_url);

        return axios
          .get(url)
          .then(response => response.data);
      },
    },
  },
});

export default UserInfo;
