import footballPlayers from '../api/footballPlayers';

// Action creator
export const fetchPlayers = () => async dispatch => {
  const response = await footballPlayers.get('/');
  dispatch({
    type: 'FETCH_PLAYERS',
    payload: response.data
  })
}

export const updateTable = () => {
  const filtered = [{
    contractUntil: '2022-06-30',
    dateOfBirth: '1993-05-13',
    jerseyNumber: 9,
    name: 'Romelu Lukaku',
    nationality: 'Belgium',
    position: 'Centre-Forward'
    }];
  return {
    type: 'UPDATE_TABLE',
    payload: filtered
  }
}