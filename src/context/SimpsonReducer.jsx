import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions, integrationMethods } from './constants';

export const initialSimpsonState = {
    fn: 'x^3 - 2*x + 2',
    lowerLimit: -1.5,
    upperLimit: 2,
    interval: 4,
};

const simpsonStateSchema = Joi.object({
    lowerLimit: Joi.number().required(),
    upperLimit: Joi.number().required(),
    interval: Joi.number().integer().positive().required(),
    fn: Joi.string().allow('').required(),
});
/* eslint-disable default-param-last */
function simpsonReducer(state = initialSimpsonState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_FN}`:
            newState = { ...state, fn: action.payload };
            break;
        case `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`:
            newState = { ...state, lowerLimit: action.payload };
            break;
        case `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`:
            newState = { ...state, upperLimit: action.payload };
            break;
        case `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_INTERVAL}`:
            newState = { ...state, interval: action.payload };
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

    const { error } = simpsonStateSchema.validate(newState);
    if (error) {
        throw new ValidationError(`Invalid state update: ${error}`);
    }

    return newState;
}

export default simpsonReducer;
