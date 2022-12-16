import { FETCH_WEATHER } from '../actions/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload, ...state];
    }

    return state;
}