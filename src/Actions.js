/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER'

/*
 * action creators
 */

export function addPlayer(name) {
    return { type: ADD_PLAYER, name }
  }