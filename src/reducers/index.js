

export const initialState = {
    currentPlayer: null,
    currentScore: 0,
    players: [], 
    loading: false,
    error: null
  }
  
const memoryApp = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PLAYER':
        return Object.assign({}, state, {
            players: [
                ...state.players,
                {
                  name: action.name,
                  score: state.currentScore
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

      case 'FETCH_PLAYERS_BEGIN':
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case 'FETCH_PLAYERS_SUCCESS':
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          players: action.payload.players
        };
  
      case 'FETCH_PLAYERS_FAILURE':
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          players: []
        }
      default:
        return state
    }
  }

  export default memoryApp