/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER';
export const INCREMENT_CURRENT_SCORE = 'INCREMENT_CURRENT_SCORE';
export const RESET_CURRENT_SCORE = 'RESET_CURRENT_SCORE';

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
