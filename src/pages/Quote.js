import React from 'react';
import '../css/quote.css';

export default function Quote() {
  return (
    <h2 className="quote">
      As far as the laws of mathematics refer
      to reality, they are not certain, and as
      far as they are certain, they do not
      refer to reality.
      <span className="writer"> — Albert Einstein</span>
    </h2>
  );
}
