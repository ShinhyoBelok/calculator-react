import React from 'react';
import './Calculator.css';
// eslint-disable-next-line
class Calculator extends React.Component {
  render() {
    return (
      <>
        <main className="container">
          <div className="calculator-container">
            <div className="output">0</div>
            <div className="buttons-container">
              <div className="graybg grayBtn">
                <button type="button">AC</button>
                <button type="button">+/-</button>
                <button type="button">%</button>
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">6</button>
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button" className="span-two">0</button>
                <button type="button">.</button>
              </div>
              <div className="orangebg orangeBtn">
                <button type="button">÷</button>
                <button type="button">x</button>
                <button type="button">-</button>
                <button type="button">+</button>
                <button type="button">=</button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Calculator;
