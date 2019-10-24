import React from 'react';
//why display and not name of array
class Grid extends React.Component {
  state = {
    gridLayout: [
      { display: '' },
      { display: '' },
      { display: '' },
      { display: '' },
      { display: '' },
      { display: '' },
      { display: '' },
      { display: '' },
      { display: '' }
    ],
    turn: false
  };
  changeTurn = () => {
    this.setState(currentState => {
      return {
        turn: !currentState.turn
      };
    });
  };
  fillSquare = idx => {
    this.setState(currentState => {
      return {
        display: this.state.turn
          ? (currentState.gridLayout[idx].display = 'X')
          : (currentState.gridLayout[idx].display = 'O')
      };
    });
  };
  render() {
    return (
      <div onClick={this.changeTurn} className="grid">
        {this.state.gridLayout.map((square, idx) => {
          return (
            <div
              onClick={() => this.fillSquare(idx)}
              className="square"
              key={idx}
            >
              {square.display}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
