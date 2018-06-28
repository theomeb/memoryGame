import React from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../Actions'
import HighScoreInput from '../components/HighScoreInput'


let AddScore = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPlayer(input.value, 10))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Player
        </button>
      </form>
    </div>
  )
}
AddScore = connect()(AddScore)

export default AddScore
