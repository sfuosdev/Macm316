import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions, differentiationMethods } from './constants';

export const initialLagrangeState = {
    fn: '2*x^3 - 4*x + 5',
    lowerLimit: -2,
    interval: 1.5,
    xTarget: -1,
    method: differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT,
};

const lagrangeStateSchema = Joi.object({
    fn: Joi.string().allow('').required(),
    lowerLimit: Joi.number().required(),
    interval: Joi.number().required(),
    xTarget: Joi.number().required(),
    method: Joi.string().required(),
});

/* eslint-disable default-param-last */
function lagrangeReducer(state = initialLagrangeState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case `${differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}_${graphDispatchActions.UPDATE_FN}`:
            newState = { ...state, fn: action.payload };
            break;
        case `${differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`:
            newState = { ...state, lowerLimit: action.payload };
            break;
        case `${differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}_${graphDispatchActions.UPDATE_TARGET_X}`:
            newState = { ...state, xTarget: action.payload };
            break;
        case `${differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}_${graphDispatchActions.UPDATE_INTERVAL}`:
            newState = { ...state, interval: action.payload };
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

    const { error } = lagrangeStateSchema.validate(newState);
    if (error) {
        throw new ValidationError(`Invalid state update: ${error}`);
    }

    return newState;
}

export default lagrangeReducer;
