import { API_URL } from '../../https';

export const apiRoutes = {
  auth: {
    login: () => `${API_URL}/auth/login`,
    refresh: () => `${API_URL}/auth/refresh`,
    logout: () => `${API_URL}/auth/logout`,
  },
  users: {
    retrieve: (userId = ':userId') => `${API_URL}/user/${userId}`,
    listParticipants: () => `${API_URL}/user/participant-list`,
    createParticipant: () => `${API_URL}/user/participant-create`,
    listAdjudicators: () => `${API_URL}/user/adjudicator-list/`,
    createAdjudicator: () => `${API_URL}/user/adjudicator-create/`,
  },
  stories: {},
  contests: {},
  storyRates: {},
};
