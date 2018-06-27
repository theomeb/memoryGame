import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ name }) => (
  <li>
    {name}
  </li>
)

Player.propTypes = {
  name: PropTypes.string.isRequired
}

export default Player