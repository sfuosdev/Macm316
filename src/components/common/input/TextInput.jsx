import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TextInput({
    onChange,
    fieldName,
    initialValue,
    alphabetOnly = false,
}) {
    const [value, setValue] = useState(initialValue);
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
}

TextInput.propTypes = {
    onChange: PropTypes.func,
    fieldName: PropTypes.string,
    initialValue: PropTypes.string,
    alphabetOnly: PropTypes.bool,
};

TextInput.defaultProps = {
    onChange: () => null,
    fieldName: '',
    initialValue: '',
    alphabetOnly: false,
};

export default TextInput;
