export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS': 
      return action.payload;
    case 'UPDATE_TABLE':{
      const allPlayers = action.payload;
      const filtered = [{
        contractUntil: '2022-06-30',
        dateOfBirth: '1993-05-13',
        jerseyNumber: 9,
        name: 'Romelu Lukaku',
        nationality: 'Belgium',
        position: 'Centre-Forward'
        }];
      return action.payload;
    }
    default:
      return state;
  }
}
