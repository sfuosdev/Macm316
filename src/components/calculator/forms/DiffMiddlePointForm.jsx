import React from 'react';
import styled from 'styled-components';
import TextInput from '../../common/TextInput';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function DiffMiddlePointForm() {
    return (
        <FormWrapper>
            <div>Middle Point Differentiation</div>
            <div>
                <TextInput fieldName="x Domain" />
            </div>
        </FormWrapper>
    );
}

export default DiffMiddlePointForm;
