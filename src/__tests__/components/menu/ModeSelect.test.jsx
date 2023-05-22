import React from 'react';
import { render, screen } from '@testing-library/react';
import { when } from 'jest-when';
import userEvent from '@testing-library/user-event';
import ModeSelect from '../../../components/menu/ModeSelect';
import useCalculatorState from '../../../hooks/useCalculatorState';
import { calculatorModes } from '../../../context/constants';

jest.mock('../../../hooks/useCalculatorState');

describe('Given the component rendered', () => {
    describe('When user clicks the component', () => {
        test('Then should list calculator modes as values', () => {
            when(useCalculatorState)
                .calledWith()
                .mockReturnValue([
                    { mode: calculatorModes.NUMERICAL_DIFFERENTIATION },
                    () => null,
                ]);
            render(<ModeSelect />);
            expect(screen.getByRole('combobox')).toBeInTheDocument();
            userEvent.selectOptions(
                screen.getByRole('combobox'),
                screen.getByText('Numerical Integration'),
            );

            expect(
                screen.getByRole('option', {
                    name: 'Numerical Differentiation',
                }).selected,
            ).toBe(false);
            expect(
                screen.getByRole('option', { name: 'Numerical Integration' })
                    .selected,
            ).toBe(true);

            expect(screen.getByRole('combobox').value).toBe(
                calculatorModes.NUMERICAL_INTEGRATION,
            );
        });
    });
    describe('When user selects an option', () => {
        test('should dispatch selected calculator mode to calculator context', () => {
            const mockDispatch = jest.fn();
            when(useCalculatorState)
                .calledWith()
                .mockReturnValue([
                    { mode: calculatorModes.NUMERICAL_DIFFERENTIATION },
                    mockDispatch,
                ]);
            render(<ModeSelect />);
            expect(screen.getByRole('combobox')).toBeInTheDocument();
            userEvent.selectOptions(
                screen.getByRole('combobox'),
                screen.getByText('Numerical Integration'),
            );

            expect(screen.getByRole('combobox').value).toBe(
                calculatorModes.NUMERICAL_INTEGRATION,
            );
            expect(mockDispatch.mock.calls[0][0]).toEqual(
                expect.objectContaining({
                    value: calculatorModes.NUMERICAL_INTEGRATION,
                }),
            );
        });
    });
});
