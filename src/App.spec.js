import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import { SYMBOLS } from './Services/cardsManager'
import GuessCount from './GuessCount'
import Card from './Card'
import sinon from 'sinon'



describe('<App />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<App />)
    })

    it('contains a zero-guess counter', () => {
      const wrapper = shallow(<App />)
      expect(wrapper).to.contain(<GuessCount guesses={0} />)
    })

    it('has 36 cards', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('Card')).to.have.length(36)
    })

    //// Renvoie tjrs un snapshot différent...
    // it('should match its reference snapshot', () => {
    //     const mockSymbols = [...SYMBOLS.repeat(2)];
    //     jest.mock('./Services/cardsManager', () => ({
    //       generateCards: jest.fn(() => [...mockSymbols]),
    //     }))

    //     try {
    //       const wrapper = shallow(<App />)
    //       expect(wrapper).to.matchSnapshot()
    //     } finally {
          
    //     }
    // })

  describe('<Card/>', () => {
        it('should trigger its `onClick` prop when clicked', () => {
            const onClick = sinon.spy()
            const wrapper = shallow(
              <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
            )
            wrapper.simulate('click')
            expect(onClick).to.have.been.calledWith(0)
        })

        it('should match its reference snapshot', () => {
            const onClick = sinon.spy()
            const wrapper = shallow(
            <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
            )
            expect(wrapper).to.matchSnapshot()
        })
    })

})

