import React, { Component } from 'react';
import './App.css';
import { makeMove } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.makeMove = this.makeMove.bind(this);
  }


  makeMove(e) {
    this.props.dispatch(makeMove(e.target.id));
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
      </div>

    );
  }
}

const mapStateToProps = state => ({
  number: state.number,
  board: state.board,
  char: state.char
})

export default connect(mapStateToProps)(App);
