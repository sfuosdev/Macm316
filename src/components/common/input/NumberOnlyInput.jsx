import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NumberOnlyInput({ onChange, fieldName, initialValue }) {
    const [value, setValue] = useState(initialValue);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value;
        const oldValue = value;

        onChange(oldValue, newValue);
        setValue(newValue);
    };

    const handleKeyPress = (e) => {
        const charCode = e.which || e.keyCode;

        // allow digits, single dot and backspace
        if (
            !((charCode >= 48 && charCode <= 57) || charCode === 190) &&
            charCode !== 8
        ) {
            e.preventDefault();
            setShowErrorMessage(true);
        } else {
            setShowErrorMessage(false);
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

            {showErrorMessage && <p>Number Input Expected</p>}
        </div>
    );
}

NumberOnlyInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    initialValue: PropTypes.number,
};

NumberOnlyInput.defaultProps = {
    initialValue: null,
};

export default NumberOnlyInput;
