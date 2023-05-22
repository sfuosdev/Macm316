import React from 'react';
import SingleSelect from '../common/SingleSelect';
import useCalculatorState from '../../hooks/useCalculatorState';
import {
    calculatorDispatchActions,
    calculatorModes,
} from '../../context/constants';

function ModeSelect() {
    const [state, dispatch] = useCalculatorState();

    const onSelect = (event) => {
        dispatch({
            action: calculatorDispatchActions.UPDATE_MODE,
            value: event.target.value,
        });
    };

    return (
        <SingleSelect onChange={onSelect} value={state.mode}>
            <option value={calculatorModes.NUMERICAL_DIFFERENTIATION}>
                Numerical Differentiation
            </option>
            <option value={calculatorModes.NUMERICAL_INTEGRATION}>
                Numerical Integration
            </option>
        </SingleSelect>
    );
}

export default ModeSelect;
