import React from 'react';
import styled from 'styled-components';
import useCalculatorState from '../../hooks/useCalculatorState';
import {
    calculatorModes,
    differentiationMethods,
    integrationMethods,
} from '../../context/constants';
import Estimation from './Estimation';
import DiffMiddlePointForm from './forms/DiffMiddlePointForm';
import LagrangeDiffForm from './forms/LagrangeDiffForm';
import { GraphContextProvider } from '../../context/graphContext';

function DifferentiationForm() {
    const [state] = useCalculatorState();

    function forMethod() {
        switch (state.method) {
            case differentiationMethods.MIDDLE_POINT:
                return (
                    <GraphContextProvider>
                        <DiffMiddlePointForm />
                    </GraphContextProvider>
                );
            case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
                return (
                    <GraphContextProvider>
                        <LagrangeDiffForm />
                    </GraphContextProvider>
                );
            default:
                return null;
        }
    }

    return forMethod();
}

function IntegrationForm() {
    const [state] = useCalculatorState();

    function forMethod() {
        switch (state.method) {
            case integrationMethods.MIDPOINT_RULE:
                return <>3</>;
            case integrationMethods.TRAPEZOIDAL_RULE:
                return <>4</>;
            case integrationMethods.SIMPSON_RULE:
                return <>5</>;
            default:
                return null;
        }
    }

    return forMethod();
}

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 150px;
`;

const FormBodyWrapper = styled.div``;

function Form() {
    const [state] = useCalculatorState();

    function forCalculatorMode() {
        switch (state.mode) {
            case calculatorModes.NUMERICAL_DIFFERENTIATION:
                return DifferentiationForm();
            case calculatorModes.NUMERICAL_INTEGRATION:
                return IntegrationForm();
            default:
                return null;
        }
    }

    return (
        <FormWrapper>
            <FormBodyWrapper>{forCalculatorMode()}</FormBodyWrapper>
            <Estimation />
        </FormWrapper>
    );
}

export default Form;
