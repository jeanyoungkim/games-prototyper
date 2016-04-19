import React from 'react';
import setGame from '../models/setGame';
import Card from './Card';

var GameBoard = React.createClass({

  getInitialState: function() {
    return {
      "cards": setGame['puzzle_data']
    }
  },

  renderCard: function(cardIndex) {
    return <Card
      key={cardIndex}
      color={this.state.cards[cardIndex].color}
      shape={this.state.cards[cardIndex].shape}
      pattern={this.state.cards[cardIndex].pattern}
      number={this.state.cards[cardIndex].number}
    />
  },

  render: function() {
    return(
      <div className='set-board'>
       {Object.keys(this.state.cards).map(this.renderCard)}
      </div>
    );
  }
});

module.exports = GameBoard;
