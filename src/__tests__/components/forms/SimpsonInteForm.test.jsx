import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GraphStateContext } from '../../../context/graphContext';
import { graphDispatchActions, integrationMethods } from '../../../context/constants';
import SimpsonForm from '../../../components/calculator/forms/InteSimpsonForm';

// mociking initial state and dispatch
const mockDispatch = jest.fn();
const initialState = {
    fn: '',
    lowerLimit: 0,
    upperLimit: 0,
    interval: 1,
};

describe('SimpsonInteForm', () => {
    /* eslint-disable testing-library/no-render-in-setup */
    beforeEach(() => {
        render(
            <GraphStateContext.Provider value={[initialState, mockDispatch]}>
                <SimpsonForm />
            </GraphStateContext.Provider>,
        );
    });

    it('should render the form', () => {
        expect(
            screen.getByText(/Simpsons Rule Integration/i),
        ).toBeInTheDocument();
    });

    it('should handle input change for function', () => {
        const fnInput = screen.getByLabelText(/fn/i);
        fireEvent.change(fnInput, { target: { value: 'x^2' } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_FN}`,
            payload: 'x^2',
        });
    });

    it('should handle input change for lower limit', () => {
        const lowerLimitInput = screen.getByLabelText(/lowerLimit/i);
        fireEvent.change(lowerLimitInput, { target: { value: 2 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: 2,
        });
    });

    it('should handle input change for upper limit', () => {
        const upperLimitInput = screen.getByLabelText(/upperLimit/i);
        fireEvent.change(upperLimitInput, { target: { value: 6 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`,
            payload: 6,
        });
    });

    it('should handle input change for interval', () => {
        const intervalInput = screen.getByLabelText(/Number of intervals/i);
        fireEvent.change(intervalInput, { target: { value: 5 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_NUMBER_OF_INTERVAL}`,
            payload: 5,
        });
    });
});
