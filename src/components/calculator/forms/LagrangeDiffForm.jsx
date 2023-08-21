import React from 'react';
import styled from 'styled-components';
import TextInput from '../../common/input/TextInput';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
import Button from '../../common/button/Button';
import LaTex from '../Latex';
import { GraphStateContext } from '../../../context/graphContext';
import { graphDispatchActions } from '../../../context/constants';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormTitle = styled.h3`
    padding-left: 1em;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.25em 1em;
`;

const FieldInputWrapper = styled.div`
    margin-left: 0.5em;
`;

function LagrangeDiffForm() {
    // context validation
    const [state, dispatch] = React.useContext(GraphStateContext);

    if (!state || !dispatch) {
        throw new Error(
            'Form must be wrapped in a GraphContextProvider component',
        );
    }

    // handle the change of the input fields by passing to onChange
    const handleFnChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = 'lagrange polynomial three point rule';
        dispatch({
            type: graphDispatchActions.UPDATE_FN,
            payload: newValue,
        });
    };

    const handleLowerLimitChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = 'lagrange polynomial three point rule';
        dispatch({
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            payload: newValue,
        });
    };

    const handleIntervalChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = 'lagrange polynomial three point rule';
        dispatch({
            type: graphDispatchActions.UPDATE_INTERVAL,
            payload: newValue,
        });
    };

    return (
        <FormWrapper>
            <FormTitle>Lagrange interpolating Polynomial</FormTitle>
            <FormField>
                <LaTex tex="f(x)" />
                <FieldInputWrapper>
                    <TextInput fieldName="" onChange={handleFnChange} />
                </FieldInputWrapper>
            </FormField>
            <FormField>
                <LaTex tex="x_{0}" />
                <FieldInputWrapper>
                    <NumberOnlyInput
                        fieldName=""
                        onChange={handleLowerLimitChange}
                    />
                </FieldInputWrapper>
            </FormField>
            <FormField>
                <LaTex tex="\textup{interval }(h)" />
                <FieldInputWrapper>
                    <NumberOnlyInput
                        fieldName=""
                        onChange={handleIntervalChange}
                    />
                </FieldInputWrapper>
            </FormField>
            <Button title="submit" onClick={() => console.log('test')} />
        </FormWrapper>
    );
}

export default LagrangeDiffForm;
