import React, { useState } from 'react';
import styled from 'styled-components';
import LaTex from '../Latex';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
import TextInput from '../../common/input/TextInput';
import Button from '../../common/button/Button';
import useGraphState from '../../../hooks/useGraphState';
import {
    graphDispatchActions,
    integrationMethods,
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
    justify-content: space-between;
    width: 400px;
    padding: 0.25em 1em;
`;

const FieldInputWrapper = styled.div`
    margin-left: 0.5em;
`;

function InteTrapezoidalForm() {
    const [state, dispatch] = useGraphState();
    const formState = state.trapezoidal_rule;
    const [fn, setFn] = useState(formState.fn);
    const [xStart, setXStart] = useState(formState.lowerLimit);
    const [xEnd, setXEnd] = useState(formState.upperLimit);
    const [numOfIntervals, setNumOfInterval] = useState(formState.interval);

    const onSubmit = () => {
        dispatch({
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_FN}`,
            payload: fn, // <- parse as number
        });
        dispatch({
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: Number(xStart), // <- parse as number
        });
        dispatch({
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`,
            payload: Number(xEnd), // <- parse as number
        });
        dispatch({
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: Number(numOfIntervals), // <- parse as number
        });
    };

    return (
        <FormWrapper>
            <FormTitle>Integration By Trapezoidal Rule</FormTitle>
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

export default InteTrapezoidalForm;
