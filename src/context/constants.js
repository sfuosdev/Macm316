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
