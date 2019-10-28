import React from "react";
import { winDiagFunc } from "../utils/utils";
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
    count: 0,
    winner: ""
  };

  checkWinner = () => {
    const winner = winDiagFunc(this.state.gridLayout);
    console.log(winner);
  };
  fillSquare = idx => {
    if (!this.state.gridLayout[idx].disabled) {
      this.setState(currentState => {
        const newGridLayout = [...currentState.gridLayout];
        newGridLayout[idx].display = currentState.turn ? "X" : "O";
        newGridLayout[idx].disabled = true;
        return {
          gridLayout: newGridLayout,
          turn: !currentState.turn
        };
      });
    }
  };
  render() {
    return this.state.winner ? (
      <h3>{this.state.winner}</h3>
    ) : (
      <div className="grid animated fadeIn delay-0.8s">
        {this.state.gridLayout.map((square, idx) => {
          return (
            <div
              onClick={() => this.fillSquare(idx)}
              className="square "
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
