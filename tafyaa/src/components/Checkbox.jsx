import React from 'react';
import '../styles/Checkbox.css';

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark" />
      {label}
    </label>
  );
}

export default Checkbox;
