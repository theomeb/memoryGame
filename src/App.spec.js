import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import Game from './components/Game'
import { SYMBOLS } from './services/cardsManager'
import GuessCount from './components/GuessCount'
import Card from './components/Card'
import sinon from 'sinon'



describe('<Game />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Game />)
    })

    it('contains a zero-guess counter', () => {
      const wrapper = shallow(<Game />);
      expect(wrapper).to.contain(<GuessCount guesses={0} />);
    })

    it('has 36 cards', () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.find('Card')).to.have.length(36);
    })
    
    const cardsManager = require.requireActual('./services/cardsManager');

    it('should match its reference snapshot', () => {
      const mockSymbols = [...SYMBOLS.repeat(2)];

      cardsManager.generateCards = jest.fn(() => mockSymbols);
      
      try {
        const wrapper = shallow(<Game />);
        expect(wrapper).to.matchSnapshot();
      } finally {
        jest.resetAllMocks();
      }
    })

  describe('<Card/>', () => {
    it('should trigger its `onClick` prop when clicked', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
          <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
        );
        wrapper.simulate('click');
        expect(onClick).to.have.been.calledWith(0)
    })

    it('should match its reference snapshot', () => {
        const wrapper = shallow(
        <Card card="😁" feedback="hidden" index={0} onClick={()=>{}} />
        );
        expect(wrapper).to.matchSnapshot()
    })
  })

})

