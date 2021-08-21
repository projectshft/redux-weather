import {CREATE_SEARCH} from "../actions"

// const cityReducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_CITY:
//       return 'fetching city lol';
//     default:
//       return state;
//   }
// }

// export default cityReducer;

const defaultState = [
  {
    title: "Starting 2021 Right",
    categories: ["health"],
    content: "I'm stating 2021 off the right way!",
  },
  {
    title: "Learn to Code",
    categories: ["career", "finances"],
    content: "I'm learning to code!",
  },
  {
    title: "Get Rich Quick!",
    categories: ["finances"],
    content: "Save your money!",
  },
];

const cityReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_SEARCH:
      return [action.payload, ...state];
    default:
      return state;
  }
}

export default cityReducer