import GhostContentAPI from '@tryghost/content-api';

const API_HOST = process.env.REACT_APP_GHOST_URL;
const API_KEY = process.env.REACT_APP_GHOST_KEY;

const GhostAPI = config => {
  const api = new GhostContentAPI({
    url: API_HOST || "https://content.shellbryson.com",
    key: API_KEY,
    version: "v3",
  });
  return api;
}

export default GhostAPI;
