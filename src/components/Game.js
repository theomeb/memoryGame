import React, { Component } from 'react'

import './Game.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import VisibleHallOfFame from '../containers/VisibleHallOfFame'
import HighScoreInput from './HighScoreInput'
import {generateCards} from '../services/cardsManager'
import AddPlayer from '../containers/AddPlayer' ;

const VISUAL_PAUSE_MSECS = 750;

class Game extends Component {
  state = {
    cards: generateCards(),
    currentPair: [],
    guesses: 0,
    hallOfFame: null,
    matchedCardIndices: [],
  }

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }

    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }

    return indexMatched ? 'visible' : 'hidden'
  }


  // Arrow fx for binding
  handleCardClick = index => {
    const { currentPair } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    if (currentPair.includes(index)) {
      return
    }

    this.handleNewPairClosedBy(index)
  }

  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  // Arrow fx for binding
  displayHallOfFame = (hallOfFame) => {
    this.setState({ hallOfFame })
  }

  resetCards = () => {
    this.setState({cards: generateCards(), currentPair: [], guesses: 0, hallOfFame: null, matchedCardIndices: [] })
  }

  render() {

    const { cards, guesses, hallOfFame, matchedCardIndices } = this.state
    //const won = matchedCardIndices.length === cards.length
    // TEMPORAIRE
    const won = matchedCardIndices.length === 2 // cards.length

    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) => (
            <Card
              card={card}
              feedback={this.getFeedbackForCard(index)}
              index={index}
              key={index}
              onClick={this.handleCardClick}
            />
          ))
        }
        {true && //true temporaire (won)
            <div>
              <VisibleHallOfFame />
              <AddPlayer/>
            </div>
        }
        <button type="button" className="reset" onClick={this.resetCards}>Reset the game</button>
      </div>
    )
  }
}

export default Game