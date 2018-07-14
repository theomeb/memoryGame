/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER';
export const INCREMENT_CURRENT_SCORE = 'INCREMENT_CURRENT_SCORE';
export const RESET_CURRENT_SCORE = 'RESET_CURRENT_SCORE';

export const FETCH_PLAYERS_BEGIN   = 'FETCH_PLAYERS_BEGIN';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';


/*
 * action creators
 */

export function addPlayer(name, score) {
    return { type: ADD_PLAYER, name}
  }

export function incrementCurrentScore() {
  return { type: INCREMENT_CURRENT_SCORE}
}

export function resetCurrentScore() {
  return { type: RESET_CURRENT_SCORE}
}

export function fetchPlayers() {
  console.log("1111");
  return dispatch => {
    console.log("22222");
    dispatch(fetchPlayersBegin());
    return fetch("http://localhost:8000/Back%20memory/memory-back/web/app_dev.php/")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPlayersSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchPlayersFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchPlayersBegin = () => ({
  type: FETCH_PLAYERS_BEGIN
});

export const fetchPlayersSuccess = players => ({
  type: FETCH_PLAYERS_SUCCESS,
  payload: { players }
});

export const fetchPlayersFailure = error => ({
  type: FETCH_PLAYERS_FAILURE,
  payload: { error }
});