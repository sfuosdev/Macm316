import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../../common/input/TextInput';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
import Button from '../../common/button/Button';
import LaTex from '../Latex';
import { GraphStateContext } from '../../../context/graphContext';
import {
    graphDispatchActions,
    differentiationMethods,
} from '../../../context/constants';

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
    padding: 0.25em 1em;
    justify-content: space-between;
    width: 400px;
`;

const FieldInputWrapper = styled.div`
    margin-left: 0.5em;
`;

function DiffMiddlePointForm() {
    const [state, dispatch] = React.useContext(GraphStateContext);
    const formState = state.middle_point_diff;
    const [fn, setFn] = useState(formState.fn);
    const [lowerBound, setLowerBound] = useState(formState.lowerLimit);
    const [h, setH] = useState(formState.interval);

    if (!state || !dispatch) {
        throw new Error(
            'Form must be wrapped in a GraphContextProvider component',
        );
    }

    const onSubmit = () => {
        dispatch({
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_FN}`,
            payload: fn,
        });
        dispatch({
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: Number(lowerBound), // <- parse as number
        });
        dispatch({
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: Number(h), // <- parse as number
        });
    };

    const handleFnChange = (oldValue, newValue) => {
        setFn(newValue);
    };

    const handleLowerLimitChange = (oldValue, newValue) => {
        setLowerBound(newValue);
    };

    const handleIntervalChange = (oldValue, newValue) => {
        setH(newValue);
    };

    return (
        <FormWrapper>
            <FormTitle>Midpoint Differentiation</FormTitle>
            <FormField>
                <LaTex tex="f(x)" />
                <FieldInputWrapper>
                    <TextInput
                        fieldName=""
                        onChange={handleFnChange}
                        initialValue={formState.fn}
                    />
                </FieldInputWrapper>
            </FormField>
            <FormField>
                <LaTex tex="x_j" />
                <FieldInputWrapper>
                    <NumberOnlyInput
                        fieldName=""
                        onChange={handleLowerLimitChange}
                        initialValue={formState.lowerLimit}
                    />
                </FieldInputWrapper>
            </FormField>
            <FormField>
                <LaTex tex="\textup{interval }(h)" />
                <FieldInputWrapper>
                    <NumberOnlyInput
                        fieldName=""
                        onChange={handleIntervalChange}
                        initialValue={formState.interval}
                    />
                </FieldInputWrapper>
            </FormField>
            <Button title="Apply" onClick={onSubmit} />
        </FormWrapper>
    );
}

export default DiffMiddlePointForm;
