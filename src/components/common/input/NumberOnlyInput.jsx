import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { act } from '@testing-library/react';

function NumberOnlyInput({ onChange, fieldName }) {
    const [value, setValue] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value;
        const oldValue = value;

        act(() => {
            // Check if the new value is numeric.
            if (Number.isNaN(Number(newValue))) {
                setShowErrorMessage(true);
            } else {
                setShowErrorMessage(false);
                onChange(oldValue, newValue);
                setValue(newValue);
            }
        });
    };

    const handleKeyPress = (e) => {
        const charCode = e.which || e.keyCode;
        const charStr = String.fromCharCode(charCode);

        act(() => {
            if (!/^[0-9]+$/.test(charStr) && charCode !== 8) {
                e.preventDefault();
                setShowErrorMessage(true);
            } else {
                setShowErrorMessage(false);
            }
        });
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

            {showErrorMessage && <p>Number Input Expected</p>}
        </div>
    );
}

NumberOnlyInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
};

export default NumberOnlyInput;
