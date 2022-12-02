import axios from "axios";

export const fetchPosts = "FETCH_DATA";
export const CREATE_DATA = "CREATE_DATA";
//q=${value} from searchbar do i need to pull state?
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Hartford&cnt=40&appid=79a5ea387ec460414cf26ee9382db272&units=imperial`;

export function FetchPosts() {
  // const request = axios.get(`${ROOT_URL}`);

  return dispatch => {
    dispatch({ type: fetchPosts});
      return axios.get(`${ROOT_URL}`)
        .then(res => {
          return res.data
          // dispatch({ type: FetchPostSuccess, paload: res.data})
    })
  };
}

export function createPost(values) {
  const post = Object.assign({}, values);

  return {
    type: CREATE_DATA,
    payload: post,
  };
}