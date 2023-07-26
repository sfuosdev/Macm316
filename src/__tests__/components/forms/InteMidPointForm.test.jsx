import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GraphStateContext } from '../../../context/graphContext';
import {
    graphDispatchActions,
    integrationMethods,
} from '../../../context/constants';
import InteMidPointForm from '../../../components/calculator/forms/InteMidPointForm';

// mocking initial state and dispatch
const mockDispatch = jest.fn();
const initialState = {
    fn: '',
    lowerLimit: 0,
    interval: 1,
};

describe('InteMidPointForm', () => {
    it('should render the form', () => {
        render(
            <GraphStateContext.Provider value={[initialState, mockDispatch]}>
                <InteMidPointForm />
            </GraphStateContext.Provider>,
        );
        expect(screen.getByText(/Mid Point Integration/i)).toBeInTheDocument();
    });

    it('should handle input change for function', () => {
        render(
            <GraphStateContext.Provider value={[initialState, mockDispatch]}>
                <InteMidPointForm />
            </GraphStateContext.Provider>,
        );
        const fnInput = screen.getByLabelText(/fn/i);
        fireEvent.change(fnInput, { target: { value: 'x^2' } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.MIDPOINT_RULE} ${graphDispatchActions.UPDATE_FN}`,
            payload: 'x^2',
        });
    });

    it('should handle input change for lower limit', () => {
        render(
            <GraphStateContext.Provider value={[initialState, mockDispatch]}>
                <InteMidPointForm />
            </GraphStateContext.Provider>,
        );
        const lowerLimitInput = screen.getByLabelText(/lowerLimit/i);
        fireEvent.change(lowerLimitInput, { target: { value: 2 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.MIDPOINT_RULE} ${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: 2, // <- change to number
        });
    });

    it('should handle input change for interval', () => {
        render(
            <GraphStateContext.Provider value={[initialState, mockDispatch]}>
                <InteMidPointForm />
            </GraphStateContext.Provider>,
        );
        const intervalInput = screen.getByLabelText(/interval/i);
        fireEvent.change(intervalInput, { target: { value: 0.1 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.MIDPOINT_RULE} ${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: 0.1, // <- change to number
        });
    });
});
