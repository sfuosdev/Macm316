import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import calculatorReducer, { initialCalculatorState } from './calculatorReducer';

const CalculatorStateContext = createContext();

function CalculatorContextProvider({ children }) {
    const [state, dispatch] = useReducer(
        calculatorReducer,
        initialCalculatorState,
    );
    return (
        <CalculatorStateContext.Provider
            value={useMemo(() => {
                return [state, dispatch];
            }, [state, dispatch])}
        >
            {children}
        </CalculatorStateContext.Provider>
    );
}

CalculatorContextProvider.propTypes = {
    children: PropTypes.node,
};

CalculatorContextProvider.defaultProps = {
    children: null,
};

export { CalculatorStateContext, CalculatorContextProvider };
