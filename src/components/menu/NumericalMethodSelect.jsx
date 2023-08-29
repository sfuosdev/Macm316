import React from 'react';
import SingleSelect from '../common/SingleSelect';
import useCalculatorState from '../../hooks/useCalculatorState';
import {
    calculatorDispatchActions,
    calculatorModes,
    differentiationMethods,
    integrationMethods,
} from '../../context/constants';

function DifferentiationSelect() {
    const [state, dispatch] = useCalculatorState();

    const onSelect = (event) => {
        dispatch({
            action: calculatorDispatchActions.UPDATE_METHOD,
            value: event.target.value,
        });
    };

    return (
        <SingleSelect onChange={onSelect} value={state.mode}>
            <option value={differentiationMethods.MIDDLE_POINT}>
                Middle Point
            </option>
            <option
                value={differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}
            >
                Lagrange Polynomical
            </option>
        </SingleSelect>
    );
}

function IntegrationSelect() {
    const [state, dispatch] = useCalculatorState();

    const onSelect = (event) => {
        dispatch({
            action: calculatorDispatchActions.UPDATE_METHOD,
            value: event.target.value,
        });
    };

    return (
        <SingleSelect onChange={onSelect} value={state.mode}>
            <option value={integrationMethods.TRAPEZOIDAL_RULE}>
                Trapezoidal Rule
            </option>
            <option value={integrationMethods.SIMPSON_RULE}>
                Simpson&quot;s 1/3 Rule
            </option>
        </SingleSelect>
    );
}

function NumericalMethodSelect() {
    const [state] = useCalculatorState();

    if (state.mode === calculatorModes.NUMERICAL_DIFFERENTIATION)
        return <DifferentiationSelect />;
    return <IntegrationSelect />;
}

export default NumericalMethodSelect;
