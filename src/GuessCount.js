import React from 'react'
import PropTypes from 'prop-types'

import './GuessCount.css'

const GuessCount = ({ guesses }) => <div className="guesses">Votre nombre d'essais : {guesses}</div>

GuessCount.propTypes = {
  guesses: PropTypes.number.isRequired,
}

export default GuessCount

