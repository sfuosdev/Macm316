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

/**
 * Graphing Context
 */

export const graphDispatchActions = {
    UPDATE_FN: 'update_fn',
    UPDATE_LOWER_LIMIT: 'update_lower_limit',
    UPDATE_UPPER_LIMIT: 'update_upper_limit',
    UPDATE_NUMBER_OF_INTERVAL: 'update_number_of_interval',
    UPDATE_METHOD: 'update_method',
    TOGGLE_UPDATE: 'toggle_update',
    // FOR LAGRANGE - 폼 내용에 따라 자유롭게 변환.
    UPDATE_POINT1: 'update_point1',
    UPDATE_POINT2: 'update_point2',
    UPDATE_POINT3: 'update_point3',
};
