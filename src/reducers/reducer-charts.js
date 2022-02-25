import { normalize, schema } from 'normalizr';
import { FETCH_CHARTS } from "../actions";

const chartsSchema = new schema.Entity('posts', undefined, {
  idAttribute: (value) => value._id
});

const DEFAULT_STATE = {
  entries: {},
  order: []
};

const postsReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_CHARTS:
      const normalizedCharts = normalize(action.payload.data, [chartsSchema])

      return {
        entries: normalizedCharts.entities.posts,
        order: normalizedCharts.result
      }

    default:
      return state;
  }
};

export default postsReducer;


  // above replaces the following:
      //return action.payload.data.map(function (p) {
        //return {
          //title: p.title || '',
          //categories: p.categories || [],
          //content: p.content || '',
          //_id: p._id || ''
        //}
      //});
