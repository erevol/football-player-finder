import { FETCH_PLAYERS } from './types';
import footballPlayers from '../api/footballPlayers';

// Action creator
export const fetchPlayers = () => async dispatch => {
    const response = await footballPlayers.get('/');
    dispatch({
        type: FETCH_PLAYERS,
        payload: response.data
    })
}