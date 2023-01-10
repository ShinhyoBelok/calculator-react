/* eslint-disable */
import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <main className="container">
    <div className="calculator-container">
      <div className="output">0</div>
      <div className="buttons-container">
        <div className="graybg grayBtn">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="span-two">0</button>
          <button>.</button>
        </div>
        <div className="orangebg orangeBtn">
          <button>÷</button>
          <button>x</button>
          <button>-</button>
          <button>+</button>
          <button>=</button>
        </div>
      </div>
    </div>
  </main>
);

export default Calculator;
