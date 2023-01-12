import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

// class Calculator1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: 0,
//       next: null,
//       operation: null,
//     };
//     this.btnClick = this.btnClick.bind(this);
//   }

//   btnClick(e) {
//     const state = calculate(this.state, e.target.textContent);
//     this.setState(state);
//   }

//   render() {
//     const { total, next, operation } = this.state;
//     return (
//       <>
//         <main className="container">
//           <div className="calculator-container">
//             <div className="output">
//               {total}
//               {operation}
//               {next}
//             </div>
//             <div className="buttons-container">
//               <div className="graybg grayBtn">
//                 <button type="button" onClick={this.btnClick}>AC</button>
//                 <button type="button" onClick={this.btnClick}>+/-</button>
//                 <button type="button" onClick={this.btnClick}>%</button>
//                 <button type="button" onClick={this.btnClick}>7</button>
//                 <button type="button" onClick={this.btnClick}>8</button>
//                 <button type="button" onClick={this.btnClick}>9</button>
//                 <button type="button" onClick={this.btnClick}>4</button>
//                 <button type="button" onClick={this.btnClick}>5</button>
//                 <button type="button" onClick={this.btnClick}>6</button>
//                 <button type="button" onClick={this.btnClick}>1</button>
//                 <button type="button" onClick={this.btnClick}>2</button>
//                 <button type="button" onClick={this.btnClick}>3</button>
//                 <button type="button" className="span-two" onClick={this.btnClick}>0</button>
//                 <button type="button" onClick={this.btnClick}>.</button>
//               </div>
//               <div className="orangebg orangeBtn">
//                 <button type="button" onClick={this.btnClick}>÷</button>
//                 <button type="button" onClick={this.btnClick}>x</button>
//                 <button type="button" onClick={this.btnClick}>-</button>
//                 <button type="button" onClick={this.btnClick}>+</button>
//                 <button type="button" onClick={this.btnClick}>=</button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </>
//     );
//   }
// }

export default function Calculator() {
  const [calData, setCalData] = useState({ total: 0, next: null, operation: null });

  const btnClick = (e) => {
    const state = calculate(calData, e.target.textContent);
    setCalData(state);
  };

  const { total, next, operation } = calData;
  return (
    <>
      <main className="container">
        <div className="calculator-container">
          <div className="output">
            {total}
            {operation}
            {next}
          </div>
          <div className="buttons-container">
            <div className="graybg grayBtn">
              <button type="button" onClick={btnClick}>AC</button>
              <button type="button" onClick={btnClick}>+/-</button>
              <button type="button" onClick={btnClick}>%</button>
              <button type="button" onClick={btnClick}>7</button>
              <button type="button" onClick={btnClick}>8</button>
              <button type="button" onClick={btnClick}>9</button>
              <button type="button" onClick={btnClick}>4</button>
              <button type="button" onClick={btnClick}>5</button>
              <button type="button" onClick={btnClick}>6</button>
              <button type="button" onClick={btnClick}>1</button>
              <button type="button" onClick={btnClick}>2</button>
              <button type="button" onClick={btnClick}>3</button>
              <button type="button" className="span-two" onClick={btnClick}>0</button>
              <button type="button" onClick={btnClick}>.</button>
            </div>
            <div className="orangebg orangeBtn">
              <button type="button" onClick={btnClick}>÷</button>
              <button type="button" onClick={btnClick}>x</button>
              <button type="button" onClick={btnClick}>-</button>
              <button type="button" onClick={btnClick}>+</button>
              <button type="button" onClick={btnClick}>=</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
