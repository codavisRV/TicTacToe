import React, { Component } from 'react';
import './App.css';
import { makeMove, declareWinner, reset, draw } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.makeMove = this.makeMove.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(e) {
    this.props.dispatch(reset());
  }

  makeMove(e) {
    let curPlayer = this.props.char;
    if (this.props.winner === "" & e.target.innerHTML === "") {
        this.props.dispatch(makeMove(e.target.id));
    }
    

    let newState = Object.assign({}, this.props);
    // check if there's a draw
    let remaining = [];
    newState.board.forEach((e) => {
        if (e.includes("")) {
            remaining.push(e[e.indexOf("")])
        } 
    }, this);
    if (remaining.length === 0) {
        newState.isDraw = true;
        this.props.dispatch(draw(newState.isDraw));
    } else {
      // check if there's a winner
          //for every win case, check if i is in x coords
          //for every win case, check if i is in y coords
      let inARow = 0;
      let activeCoords = curPlayer === "X" ? newState.xCoords : newState.yCoords
      for (var i = 0; i < newState.winCases.length; i++) {
        activeCoords.forEach((coord) => {
              if (newState.winCases[i].includes(coord)) {
                  inARow++;
              }
          })
          if (inARow === 3) {
              newState.winner=curPlayer;
              this.props.dispatch(declareWinner(newState.winner));                      
              break;
          } else {inARow = 0;}
      }
    }
  }

  render() {
    return (
      <div className="App">
        <table id="table">
          <tbody>
            <tr>
              <td id="00" onClick={this.makeMove}>{this.props.board[0][0]}</td>
              <td id="01" onClick={this.makeMove}>{this.props.board[0][1]}</td>
              <td id="02" onClick={this.makeMove}>{this.props.board[0][2]}</td>
            </tr>
            <tr>
              <td id="10" onClick={this.makeMove}>{this.props.board[1][0]}</td>
              <td id="11" onClick={this.makeMove}>{this.props.board[1][1]}</td>
              <td id="12" onClick={this.makeMove}>{this.props.board[1][2]}</td>
            </tr>
            <tr>
              <td id="20" onClick={this.makeMove}>{this.props.board[2][0]}</td>
              <td id="21" onClick={this.makeMove}>{this.props.board[2][1]}</td>
              <td id="22" onClick={this.makeMove}>{this.props.board[2][2]}</td>
            </tr>
          </tbody>
        </table>
        {this.props.winner === "" ? <p></p> : <p>Winner is {this.props.winner}</p>}
        {this.props.isDraw === true ? <p>Game was a draw</p> : <p></p>}
        <button onClick={this.handleReset}>Reset Game</button>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  number: state.number,
  board: state.board,
  char: state.char,
  xCoords: state.xCoords,
  yCoords: state.yCoords,
  winCases: state.winCases,
  winner: state.winner,
  isDraw: state.isDraw
})

export default connect(mapStateToProps)(App);
