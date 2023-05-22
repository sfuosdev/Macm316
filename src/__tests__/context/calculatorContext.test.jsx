import React from 'react';
import { render } from '@testing-library/react';
import useCalculatorState from '../../hooks/useCalculatorState';
import { CalculatorContextProvider } from '../../context/calculatorContext';
import { initialCalculatorState } from '../../context/calculatorReducer';

describe('Given context provider', () => {
    describe('When component is a child of the provider', () => {
        test('should be able to use calculator state hook', () => {
            const checkState = jest.fn();
            function Component() {
                const [state] = useCalculatorState();
                checkState(state);
                return <>component</>;
            }
            render(
                <CalculatorContextProvider>
                    <Component />
                </CalculatorContextProvider>,
            );

            expect(checkState.mock.calls[0][0]).toEqual(initialCalculatorState);
        });
    });
});
