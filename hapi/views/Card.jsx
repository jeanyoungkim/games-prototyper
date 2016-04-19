import React from 'react';

var Card = React.createClass({

  render: function() {
    return(
      <div>
        {this.props.color}
        {this.props.shape}
        {this.props.pattern}
        {this.props.number}
      </div>
    );
  }
});

module.exports = Card;
