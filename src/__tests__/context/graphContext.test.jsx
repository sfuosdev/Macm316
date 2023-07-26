import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    GraphStateContext,
    GraphContextProvider,
} from '../../context/graphContext';
import { initialRootGraphState } from '../../context/graphRootReducer';

describe('GraphContext', () => {
    it('should provide the state and dispatch values to the children', () => {
        function TestComponent() {
            const [state, dispatch] = React.useContext(GraphStateContext);
            return (
                <>
                    <div data-testid="state">{JSON.stringify(state)}</div>
                    <div data-testid="dispatch">{typeof dispatch}</div>
                </>
            );
        }

        render(
            <GraphContextProvider>
                <TestComponent />
            </GraphContextProvider>,
        );

        const stateValue = screen.getByTestId('state');
        const dispatchValue = screen.getByTestId('dispatch');

        // Make sure to stringify your initial state as you are comparing stringified values
        expect(stateValue.textContent).toBe(
            JSON.stringify(initialRootGraphState),
        );
        expect(dispatchValue.textContent).toBe('function');
    });
});
