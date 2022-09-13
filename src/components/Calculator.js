import React, { Component } from 'react';
import calculate from './logic/calculator';
import Navbar from './pages/Navbar';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const data = e.target.value;
    const state = calculate(this.state, data);
    this.setState(state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Navbar />
        <div className="calc">
          <div className="displayScreen">
            {total}
            {operation}
            {next}
          </div>
          <div className="calcBlock">
            <div className="col1">
              <button
                type="button"
                value="AC"
                onClick={this.handleClick}
                className="btnAc"
              >
                AC
              </button>
              <button
                type="button"
                value="+/-"
                onClick={this.handleClick}
                className="btnAc"
              >
                +/-
              </button>
              <button
                type="button"
                value="%"
                onClick={this.handleClick}
                className="btnAc"
              >
                %
              </button>
              <button
                type="button"
                value="÷"
                onClick={this.handleClick}
                className="btnAc operator"
              >
                /
              </button>
            </div>

            <div className="col1">
              <button
                type="button"
                value={7}
                onClick={this.handleClick}
                className="btnAc"
              >
                7
              </button>
              <button
                type="button"
                value={8}
                onClick={this.handleClick}
                className="btnAc"
              >
                8
              </button>
              <button
                type="button"
                value={9}
                onClick={this.handleClick}
                className="btnAc"
              >
                9
              </button>
              <button
                type="button"
                value="x"
                onClick={this.handleClick}
                className="btnAc operator"
              >
                x
              </button>
            </div>

            <div className="col1">
              <button
                type="button"
                value={4}
                onClick={this.handleClick}
                className="btnAc"
              >
                4
              </button>
              <button
                type="button"
                value={5}
                onClick={this.handleClick}
                className="btnAc"
              >
                5
              </button>
              <button
                type="button"
                value={6}
                onClick={this.handleClick}
                className="btnAc"
              >
                6
              </button>
              <button
                type="button"
                value="-"
                onClick={this.handleClick}
                className="btnAc operator"
              >
                -
              </button>
            </div>

            <div className="col1">
              <button
                type="button"
                value={1}
                onClick={this.handleClick}
                className="btnAc"
              >
                1
              </button>
              <button
                type="button"
                value={2}
                onClick={this.handleClick}
                className="btnAc"
              >
                2
              </button>
              <button
                type="button"
                value={3}
                onClick={this.handleClick}
                className="btnAc"
              >
                3
              </button>
              <button
                type="button"
                value="+"
                onClick={this.handleClick}
                className="btnAc operator"
              >
                +
              </button>
            </div>

            <div className="col1">
              <button
                type="button"
                value={0}
                onClick={this.handleClick}
                className="btnAc btn0"
              >
                0
              </button>
              <button
                type="button"
                value="."
                onClick={this.handleClick}
                className="btnAc"
              >
                .
              </button>
              <button
                type="button"
                value="="
                onClick={this.handleClick}
                className="btnAc operator"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
