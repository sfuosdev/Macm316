import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
    differentiationMethods,
    graphDispatchActions,
} from '../../../context/constants';
import DiffMiddlePointForm from '../../../components/calculator/forms/DiffMiddlePointForm';

const mockDispatch = jest.fn();

jest.mock('../../../hooks/useGraphState', () => {
    // mocking initial state and dispatch
    const initialState = {
        fn: '',
        lowerLimit: 0,
        interval: 1,
    };
    return [initialState, jest.fn()];
});

describe.skip('DiffMiddlePointForm', () => {
    it('should render the form', () => {
        render(<DiffMiddlePointForm />);
        expect(
            screen.getByText(/Middle Point Differentiation/i),
        ).toBeInTheDocument();
    });

    it('should handle input change for function', () => {
        render(<DiffMiddlePointForm />);
        const fnInput = screen.getByLabelText(/fn/i);
        fireEvent.change(fnInput, { target: { value: 'x^2' } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_FN}`,
            payload: 'x^2',
        });
    });

    it('should handle input change for lower limit', () => {
        render(<DiffMiddlePointForm />);
        const lowerLimitInput = screen.getByLabelText(/lowerLimit/i);
        fireEvent.change(lowerLimitInput, { target: { value: 2 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: 2, // <- change to number
        });
    });

    it('should handle input change for interval', () => {
        render(<DiffMiddlePointForm />);
        const intervalInput = screen.getByLabelText(/interval/i);
        fireEvent.change(intervalInput, { target: { value: 0.1 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: 0.1, // <- change to number
        });
    });
});
