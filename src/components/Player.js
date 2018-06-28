import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ name, score }) => (
  <li>
    {name}, {score}
  </li>
)

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default Player