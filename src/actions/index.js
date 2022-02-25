import axios from "axios";

export const FETCH_CHARTS = "FETCH_POSTS";

const ROOT_URL = "https://parsity-blog-server.herokuapp.com";

export function fetchCharts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_CHARTS,
    payload: request
  };
}
