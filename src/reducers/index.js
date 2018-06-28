export const initialState = {
    currentPlayer: null,
    currentScore: 0,
    players: []
  }
  
const memoryApp = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PLAYER':
        return Object.assign({}, state, {
            players: [
                ...state.players,
                {
                  name: action.name,
                  score: action.score
                }
            ]
        })

      case 'INCREMENT_CURRENT_SCORE':
        return Object.assign({}, state, {
          currentScore: state.currentScore + 1
        })

      case 'RESET_CURRENT_SCORE':
        return Object.assign({}, state, {
          currentScore: 0
        })

      default:
        return state
    }
  }

  export default memoryApp