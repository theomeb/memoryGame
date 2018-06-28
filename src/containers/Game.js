import React, { Component } from 'react'

import './Game.css'

import Card from '../components/Card'
import GuessCount from '../components/GuessCount'
import VisibleHallOfFame from '../containers/VisibleHallOfFame'
import {generateCards} from '../services/cardsManager'
import AddScore from '../containers/AddScore' 
import { incrementCurrentScore, resetCurrentScore } from '../Actions'
import { connect }  from 'react-redux'

const VISUAL_PAUSE_MSECS = 750;

const mapStateToProps = function(state){
  return { 
    currentScore: state.currentScore
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    incrementScore: () => {
      dispatch(incrementCurrentScore())
    }, 
    resetScore: () => {
      dispatch(resetCurrentScore())
    }
  }
}

export class Game extends Component {
  state = {
    cards: generateCards(),
    currentPair: [],
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
    const { cards, currentPair, matchedCardIndices } = this.state
    const newPair = [currentPair[0], index]

    const matched = cards[newPair[0]] === cards[newPair[1]]
    
    this.setState({ currentPair: newPair})
    this.props.incrementScore()

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
    this.props.resetScore()
  }

  render() {

    const { cards, matchedCardIndices } = this.state
    //const won = matchedCardIndices.length === cards.length
    // TEMPORAIRE
    const won = matchedCardIndices.length === 2 // cards.length

    if (won) {console.log('oui')}

    return (
      <div className="memory">
        <GuessCount guesses={this.props.currentScore }/>
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
        {won && //true temporaire (won)
            <div>
              <VisibleHallOfFame />
              <AddScore/>
            </div>
        }
        <button type="button" className="reset" onClick={this.resetCards}>Reset the game</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)