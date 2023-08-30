import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../../common/input/TextInput';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
import Button from '../../common/button/Button';
import LaTex from '../Latex';
import {
    graphDispatchActions,
    integrationMethods,
} from '../../../context/constants';
import useGraphState from '../../../hooks/useGraphState';

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

function SimpsonForm() {
    const [state, dispatch] = useGraphState();
    const formState = state.simpson_rule;
    const [fn, setFn] = useState(formState.fn);
    const [numOfIntervals, setNumOfInterval] = useState(formState.interval);
    const [xStart, setXStart] = useState(formState.lowerLimit);
    const [xEnd, setXEnd] = useState(formState.upperLimit);

    if (!state || !dispatch) {
        throw new Error(
            'Form must be wrapped in a GraphContextProvider component',
        );
    }

    const onSubmit = () => {
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_FN}`,
            payload: fn,
        });
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: Number(xStart), // <- parse as number
        });
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`,
            payload: Number(xEnd), // <- parse as number
        });
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: Number(numOfIntervals), // <- parse as number
        });
    };

    return (
        <FormWrapper>
            <FormTitle>Integration by Composite Simpsons 1/3 Rule</FormTitle>
            <FormField>
                <LaTex tex="f(x)" />
                <FieldInputWrapper>
                    <TextInput
                        fieldName=""
                        onChange={(oldVal, newVal) => setFn(newVal)}
                        initialValue={fn}
                    />
                </FieldInputWrapper>
            </FormField>
            <FormField>
                <LaTex tex="x_{0}" />
                <FieldInputWrapper>
                    <NumberOnlyInput
                        fieldName=""
                        onChange={(oldVal, newVal) => setXStart(newVal)}
                        initialValue={xStart}
                    />
                </FieldInputWrapper>
            </FormField>
            <FormField>
                <LaTex tex="x_{end}" />
                <FieldInputWrapper>
                    <NumberOnlyInput
                        fieldName=""
                        onChange={(oldVal, newVal) => setXEnd(newVal)}
                        initialValue={xEnd}
                    />
                </FieldInputWrapper>
            </FormField>
            <FormField>
                <LaTex tex="\textup{# of intervals }(n)" />
                <FieldInputWrapper>
                    <NumberOnlyInput
                        fieldName=""
                        onChange={(oldVal, newVal) => setNumOfInterval(newVal)}
                        initialValue={numOfIntervals}
                    />
                </FieldInputWrapper>
            </FormField>
            <Button title="submit" onClick={onSubmit} />
        </FormWrapper>
    );
}

export default SimpsonForm;
