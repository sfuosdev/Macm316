import calculatorReducer from '../../context/calculatorReducer';
import {
    calculatorDispatchActions,
    calculatorModes,
    differentiationMethods,
    integrationMethods,
} from '../../context/constants';
import { ValidationError } from '../../errors';

describe('Given initial state', () => {
    const initialState = {
        mode: calculatorModes.NUMERICAL_INTEGRATION,
        method: integrationMethods.TRAPEZOIDAL_RULE,
    };

    describe('When action dispatch does not contain action entry', () => {
        test('Then should throw error for missing action entry', () => {
            const dispatch = { value: 0 };
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                ValidationError,
            );
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                'Calculator Reducer: Invalid action dispatch missing entry: action',
            );
        });
    });
    describe('When action dispatch does not contain value entry', () => {
        test('Then should throw error for missing value entry', () => {
            const dispatch = { action: calculatorDispatchActions.UPDATE_MODE };
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                ValidationError,
            );
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                'Calculator Reducer: Invalid action dispatch missing entry: value',
            );
        });
    });
    describe('When action dispatch is not a pre-defined action', () => {
        test('Then should throw error for unhandled action', () => {
            const dispatch = {
                action: 'unknown action',
                value: 0,
            };
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                ValidationError,
            );
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                'Calculator Reducer: Unhandled action type: unknown action',
            );
        });
    });

    describe('When UPDATE_MODE action dispatched', () => {
        test('Then should throw error if value is not a valid calculator mode', () => {
            const dispatch = {
                action: calculatorDispatchActions.UPDATE_MODE,
                value: null,
            };
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                ValidationError,
            );
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                'Calculator Reducer: Invalid state update: ValidationError: "mode" must be one of [Numerical Differentitation, Numerical Integration]',
            );
        });
        describe('When change NUMERICAL_INTEGRATION to NUMERICAL_DIFFERENTIATION', () => {
            test('Then should clear current state and return new state with default method', () => {
                const prevState = {
                    mode: calculatorModes.NUMERICAL_INTEGRATION,
                    method: integrationMethods.TRAPEZOIDAL_RULE,
                };
                const dispatch = {
                    action: calculatorDispatchActions.UPDATE_MODE,
                    value: calculatorModes.NUMERICAL_DIFFERENTIATION,
                };
                const newState = calculatorReducer(prevState, dispatch);
                expect(newState).toEqual({
                    mode: calculatorModes.NUMERICAL_DIFFERENTIATION,
                    method: differentiationMethods.MIDDLE_POINT,
                });
            });
        });
        describe('When change NUMERICAL_DIFFERENTIATION to NUMERICAL_INTEGRATION', () => {
            test('Then should clear current state and return new state with default method', () => {
                const prevState = {
                    mode: calculatorModes.NUMERICAL_DIFFERENTIATION,
                    method: integrationMethods.SIMPSON_RULE,
                };
                const dispatch = {
                    action: calculatorDispatchActions.UPDATE_MODE,
                    value: calculatorModes.NUMERICAL_INTEGRATION,
                };
                const newState = calculatorReducer(prevState, dispatch);
                expect(newState).toEqual({
                    mode: calculatorModes.NUMERICAL_INTEGRATION,
                    method: integrationMethods.TRAPEZOIDAL_RULE,
                });
            });
        });
    });

    describe('When UPDATE_METHOD action dispatched', () => {
        test('Then should throw error if value is not a valid numerical method', () => {
            const dispatch = {
                action: calculatorDispatchActions.UPDATE_METHOD,
                value: null,
            };
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                ValidationError,
            );
            expect(() => calculatorReducer(initialState, dispatch)).toThrow(
                'Calculator Reducer: Invalid state update: ValidationError: "method" must be one of [middle_point_diff, lagrange_three_points_diff, midpoint_rule, simpson_rule, trapezoidal_rule]',
            );
        });

        test('Then should return new state with new numerical method', () => {
            const dispatch = {
                action: calculatorDispatchActions.UPDATE_METHOD,
                value: integrationMethods.MIDPOINT_RULE,
            };
            const newState = calculatorReducer(initialState, dispatch);
            expect(newState).toEqual({
                mode: calculatorModes.NUMERICAL_INTEGRATION,
                method: integrationMethods.MIDPOINT_RULE,
            });
        });
    });
});
