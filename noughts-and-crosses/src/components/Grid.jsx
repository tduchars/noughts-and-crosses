import React from "react";
//why display and not name of array
class Grid extends React.Component {
  state = {
    gridLayout: [
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false }
    ],
    turn: false,
    count: 0
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
      return !currentState.gridLayout[idx].disabled
        ? {
            display: this.state.turn
              ? (currentState.gridLayout[idx].display = "X")
              : (currentState.gridLayout[idx].display = "O"),
            disabled: (currentState.gridLayout[idx].disabled = true),
            count: currentState.count++
          }
        : { turn: !currentState.turn };
    });
    setTimeout(() => {
      this.gameOver();
    }, 2000);
  };
  gameOver = () => {
    return this.state.count === 9 ? alert("GAME OVER!") : null;
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
