import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { graphDispatchActions } from '../../../context/constants';
import LagrangeDiffForm from '../../../components/calculator/forms/LagrangeDiffForm';

const mockDispatch = jest.fn();

jest.mock('../../../hooks/useGraphState', () => {
    const initialState = {
        fn: '',
        lowerLimit: 0,
        interval: 1,
    };
    return [initialState, jest.fn()];
});

describe.skip('LagrangeDiffForm', () => {
    it('should render the form', () => {
        render(<LagrangeDiffForm />);
        expect(
            screen.getByText(/Lagrange Polynomial Differentiation/i),
        ).toBeInTheDocument();
    });

    it('should handle input change for function', () => {
        render(<LagrangeDiffForm />);
        const fnInput = screen.getByLabelText(/fn/i);
        fireEvent.change(fnInput, { target: { value: 'x^2' } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: graphDispatchActions.UPDATE_FN,
            payload: 'x^2',
        });
    });

    it('should handle input change for lower limit', () => {
        render(<LagrangeDiffForm />);
        const lowerLimitInput = screen.getByLabelText(/lowerLimit/i);
        fireEvent.change(lowerLimitInput, { target: { value: 2 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            payload: '2',
        });
    });

    it('should handle input change for interval', () => {
        render(<LagrangeDiffForm />);
        const intervalInput = screen.getByLabelText(/interval/i);
        fireEvent.change(intervalInput, { target: { value: 0.1 } });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: graphDispatchActions.UPDATE_INTERVAL,
            payload: '0.1',
        });
    });
});
