import React, { Component } from 'react';
import { useState } from 'react';
import calculate from './logic/calculator';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [obj, setObj] = useState({
    total: '',
    next: null,
    operation: null,
  })

  const handleClick = (e) => {
    const data = e.target.value;
    const state = calculate(obj, data);
    setObj(state);
  }

    const { total, next, operation } = obj;
    return (
      <div>
        <div className="calc">
          <div className="displayScreen">
            {total}
            {operation}
            {next}
          </div>
          <div className="calcBlock">
            <div className="col1">
              <button type="button" value="AC" onClick={handleClick} className="btnAc">AC</button>
              <button type="button" value="+/-" onClick={handleClick} className="btnAc">+/-</button>
              <button type="button" value="%" onClick={handleClick} className="btnAc">%</button>
              <button type="button" value="÷" onClick={handleClick} className="btnAc operator">/</button>
            </div>

            <div className="col1">
              <button type="button" value={7} onClick={handleClick} className="btnAc">7</button>
              <button type="button" value={8} onClick={handleClick} className="btnAc">8</button>
              <button type="button" value={9} onClick={handleClick} className="btnAc">9</button>
              <button type="button" value="x" onClick={handleClick} className="btnAc operator">x</button>
            </div>

            <div className="col1">
              <button type="button" value={4} onClick={handleClick} className="btnAc">4</button>
              <button type="button" value={5} onClick={handleClick} className="btnAc">5</button>
              <button type="button" value={6} onClick={handleClick} className="btnAc">6</button>
              <button type="button" value="-" onClick={handleClick} className="btnAc operator">-</button>
            </div>

            <div className="col1">
              <button type="button" value={1} onClick={handleClick} className="btnAc">1</button>
              <button type="button" value={2} onClick={handleClick} className="btnAc">2</button>
              <button type="button" value={3} onClick={handleClick} className="btnAc">3</button>
              <button type="button" value="+" onClick={handleClick} className="btnAc operator">+</button>
            </div>

            <div className="col1">
              <button type="button" value={0} onClick={handleClick} className="btnAc btn0">0</button>
              <button type="button" value="." onClick={handleClick} className="btnAc">.</button>
              <button type="button" value="=" onClick={handleClick} className="btnAc operator">=</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Calculator;
