import React, { useState } from 'react';

const TextInputField = ({ onChange, fieldName,alphabetOnly=false }) => {
  const [value, setValue] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const oldValue = value;

    if (typeof newValue === 'string') {
      setValue(newValue);
      onChange(oldValue, newValue);
      setShowErrorMessage(false);
    } 
  };

  const handleKeyPress = (e) => {
    if (alphabetOnly) {
    const charCode = e.which || e.keyCode;
    const charStr = String.fromCharCode(charCode);

    if (!/^[A-Za-z\s]+$/.test(charStr)) {
      e.preventDefault();
      setShowErrorMessage(true);
    }
}
  };

  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type="text"
        id={fieldName}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      {showErrorMessage && <p>Text Input Expected</p>}
    </div>
  );
};

export default TextInputField;