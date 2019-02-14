import _ from 'lodash';
import { FETCH_PLAYERS, GET_PLAYERS } from '../actions/types';

const initialState = {
    players: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYERS:
            return action.payload;
        case GET_PLAYERS:
            return { ...state };
        default:
            return state;
    }
}
