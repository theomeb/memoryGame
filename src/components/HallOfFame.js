import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const HallOfFame = ({ players }) => (
  // <ul>
  //   {players.map((player, index) => (
  //     <Player key={index} {...player} />
  //   ))}
  // </ul>
  <div> YO </div>
)


HallOfFame.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default HallOfFame