import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
    graphDispatchActions,
    integrationMethods,
} from '../../../context/constants';
import InteSimpsonForm from '../../../components/calculator/forms/InteSimpsonForm';

const mockDispatch = jest.fn();

jest.mock('../../../hooks/useGraphState', () => {
    // mociking initial state and dispatch
    const initialState = {
        simpson_rule: {
            fn: 'x+3',
            lowerLimit: 1,
            upperLimit: 2,
            interval: 3,
        },
    };
    return () => [initialState, jest.fn()];
});

describe.skip('SimpsonInteForm', () => {
    it('should render the form', () => {
        render(<InteSimpsonForm />);
        expect(
            screen.getByText('Integration by Composite Simpsons 1/3 Rule'),
        ).toBeInTheDocument();
    });

    it('should handle input change for function', () => {
        render(<InteSimpsonForm />);
        const fnInput = screen.getByDisplayValue('x+3');
        fireEvent.change(fnInput, { target: { value: 'x^2' } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_FN}`,
            payload: 'x^2',
        });
    });

    it('should handle input change for lower limit', () => {
        render(<InteSimpsonForm />);
        const lowerLimitInput = screen.getByDisplayValue('1');
        fireEvent.change(lowerLimitInput, { target: { value: 2 } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: 2,
        });
    });

    it('should handle input change for upper limit', () => {
        render(<InteSimpsonForm />);
        const upperLimitInput = screen.getByDisplayValue('2');
        fireEvent.change(upperLimitInput, { target: { value: 6 } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`,
            payload: 6,
        });
    });

    it('should handle input change for interval', () => {
        render(<InteSimpsonForm />);
        const intervalInput = screen.getByDisplayValue('3');
        fireEvent.change(intervalInput, { target: { value: 5 } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_NUMBER_OF_INTERVAL}`,
            payload: 5,
        });
    });
});
