import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions, integrationMethods } from './constants';

export const initialTrapezoidalState = {
    fn: '5*sin(x/2)',
    lowerLimit: 0,
    upperLimit: 2 * Math.PI,
    interval: 5,
};

const trapezoidalStateSchema = Joi.object({
    upperLimit: Joi.number().required(),
    lowerLimit: Joi.number().required(),
    interval: Joi.number().integer().positive().required(),
    fn: Joi.string().allow('').required(),
});
/* eslint-disable default-param-last */
function trapezoidalReducer(state = initialTrapezoidalState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_FN}`:
            newState = { ...state, fn: action.payload };
            break;
        case `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`:
            newState = { ...state, lowerLimit: action.payload };
            break;
        case `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`:
            newState = { ...state, upperLimit: action.payload };
            break;
        case `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_INTERVAL}`:
            newState = { ...state, interval: action.payload };
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

    const { error } = trapezoidalStateSchema.validate(newState);
    if (error) {
        throw new ValidationError(`Invalid state update: ${error}`);
    }

    return newState;
}

export default trapezoidalReducer;
