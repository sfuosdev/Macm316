import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GraphStateContext } from '../../../context/graphContext';
import { graphDispatchActions } from '../../../context/constants';
import LagrangeDiffForm from '../../../components/calculator/forms/LagrangeDiffForm';

// mociking initial state and dispatch
const mockDispatch = jest.fn();
const initialState = {
    fn: '',
    lowerLimit: 0,
    interval: 1,
};

describe('LagrangeDiffForm', () => {
    /* eslint-disable testing-library/no-render-in-setup */
    beforeEach(() => {
        render(
            <GraphStateContext.Provider value={[initialState, mockDispatch]}>
                <LagrangeDiffForm />
            </GraphStateContext.Provider>,
        );
    });

    it('should render the form', () => {
        expect(
            screen.getByText(/Lagrange Polynomial Differentiation/i),
        ).toBeInTheDocument();
    });

    it('should handle input change for function', () => {
        const fnInput = screen.getByLabelText(/fn/i);
        fireEvent.change(fnInput, { target: { value: 'x^2' } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: graphDispatchActions.UPDATE_FN,
            payload: 'x^2',
        });
    });

    it('should handle input change for lower limit', () => {
        const lowerLimitInput = screen.getByLabelText(/lowerLimit/i);
        fireEvent.change(lowerLimitInput, { target: { value: 2 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            payload: '2',
        });
    });

    it('should handle input change for interval', () => {
        const intervalInput = screen.getByLabelText(/interval/i);
        fireEvent.change(intervalInput, { target: { value: 0.1 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: graphDispatchActions.UPDATE_INTERVAL,
            payload: '0.1',
        });
    });
});
