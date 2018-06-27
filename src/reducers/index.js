const initialState = {
    currentPlayer: null,
    players: []
  }
  
const HOF = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PLAYER':
        return Object.assign({}, state, {
            players: [
                ...state.players,
                {
                  name: action.name,
                }
            ]
        })
      default:
        return state
    }
  }

  export default HOF