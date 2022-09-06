import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="calc">
          <div className="displayScreen">
            <p>0</p>
          </div>
          <div className="calcBlock">
            <div className="col1">
              <button type="button" className="btnAc">AC</button>
              <button type="button" className="btnAc">+/-</button>
              <button type="button" className="btnAc">%</button>
              <button type="button" className="btnAc operator">/</button>
            </div>

            <div className="col1">
              <button type="button" className="btnAc">7</button>
              <button type="button" className="btnAc">8</button>
              <button type="button" className="btnAc">9</button>
              <button type="button" className="btnAc operator">x</button>
            </div>

            <div className="col1">
              <button type="button" className="btnAc">4</button>
              <button type="button" className="btnAc">5</button>
              <button type="button" className="btnAc">6</button>
              <button type="button" className="btnAc operator">-</button>
            </div>

            <div className="col1">
              <button type="button" className="btnAc">1</button>
              <button type="button" className="btnAc">2</button>
              <button type="button" className="btnAc">3</button>
              <button type="button" className="btnAc operator">+</button>
            </div>

            <div className="col1">
              <button type="button" className="btnAc btn0">0</button>
              <button type="button" className="btnAc">.</button>
              <button type="button" className="btnAc operator">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
