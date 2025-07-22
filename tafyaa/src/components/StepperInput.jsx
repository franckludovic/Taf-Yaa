import React from 'react';
import '../styles/StepperInput.css';

function StepperInput({ value, onChange }) {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => onChange(value > 0? value - 1 : value = 0);

  return (
    <div className="stepper">
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={value} readOnly />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default StepperInput;
