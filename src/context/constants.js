/**
 * Calculator Context
 */
export const calculatorModes = {
    NUMERICAL_DIFFERENTIATION: 'Numerical Differentitation',
    NUMERICAL_INTEGRATION: 'Numerical Integration',
};
export const calculatorDispatchActions = {
    UPDATE_MODE: 'update_mode',
    UPDATE_METHOD: 'update_method',
};
export const differentiationMethods = {
    MIDDLE_POINT: 'middle point',
    LAGRANGE_POLYNOMIAL_THREE_POINT: 'lagrange polynomial three point rule',
};
export const integrationMethods = {
    MIDPOINT_RULE: 'midpoint rule',
    TRAPEZOIDAL_RULE: 'trapezoidal rule',
    SIMPSON_RULE: 'simpson rule',
};

export const graphDispatchActions = {
    UPDATE_FUNC: 'update_func',
    UPDATE_LOWER_LIMIT: 'update_lower_limit',
    UPDATE_UPPER_LIMIT: 'update_upper_limit',
    UPDATE_METHOD: 'update_method',
    TOGGLE_UPDATE: 'toggle_update',
};
