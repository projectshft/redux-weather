import { combineReducers } from 'redux';
import PostsReducer from './reducer-5day';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
