import React from 'react';
import styled from 'styled-components';
import TextInput from '../../common/TextInput';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

/*
function Validation (props) {
    const pattern = /^[a-zA-Z0-9]+$/;
    if (!pattern.test(props)) {
        alert("Input must be a number, Special characters are not allowed.");
    }
}
*/

function InteTrapezoidalForm() {
    // const [startPoint, setStartPoint] = useState('');
    // const [endPoint, setEndPoint] = useState('');
    // const [interval, setInterval] = useState('');
    // const [func, setFunc] = useState('');

    // const handleStartPointChange = (value) => {
    //     setStartPoint(value);
    // };

    // const handleEndPointChange = (value) => {
    //     setEndPoint(value);
    // };

    // const handleIntervalChange = (value) => {
    //     setInterval(value);
    // };

    // const handleFuncChange = (value) => {
    //     setFunc(value);
    // };
    const Calculate = () => {
        // const result = null;
    };
    return (
        <FormWrapper>
            <div>Trapezoidal Integration</div>
            <div>
                <TextInput fieldName="Function/Equation " />
                <TextInput fieldName="x start point " />
                <TextInput fieldName="x end point " />
                <TextInput fieldName="Number of interval " />
            </div>
            <button type="submit" onClick={Calculate}>
                Calculate
            </button>
        </FormWrapper>
    );
}

export default InteTrapezoidalForm;
