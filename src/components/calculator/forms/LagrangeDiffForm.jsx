import React from 'react';
import styled from 'styled-components';
import TextInput from '../../common/TextInput';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
import LaTex from '../Latex';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function LagrangeDiffForm() {
    // hold the value of the input fields
    const [filedValue, setFieldValue] = React.useState('');
    console.log(filedValue);

    // handle the change of the input fields by passing to onChange
    const handleFieldChange = (oldValue, newValue) => {
        console.log(oldValue);
        setFieldValue(newValue);
    };

    return (
        <FormWrapper>
            <div>Lagrange Polynomial Differentiation</div>
            <div>
                <LaTex tex="f(x)" />
                <TextInput />
            </div>
            <div>
                <LaTex tex="\textup{value of }x_{0}" />
                <NumberOnlyInput onChange={handleFieldChange} />
            </div>
            <div>
                <LaTex tex="\textup{interval }(h)" />
                <NumberOnlyInput onChange={handleFieldChange} />
            </div>
        </FormWrapper>
    );
}

export default LagrangeDiffForm;
