import React from 'react';
import styled from 'styled-components';
import TextInput from '../../common/TextInput';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
import LaTex from '../Latex';
import { GraphStateContext } from '../../../context/graphContext';
import {
    graphDispatchActions,
    integrationMethods,
} from '../../../context/constants';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function SimpsonForm() {
    const [state, dispatch] = React.useContext(GraphStateContext);

    if (!state || !dispatch) {
        throw new Error(
            'Form must be wrapped in a GraphContextProvider component',
        );
    }

    const handleFnChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_FN}`,
            payload: newValue,
        });
    };

    const handleLowerLimitChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: Number(newValue), // <- parse as number
        });
    };

    const handleUpperLimitChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`,
            payload: Number(newValue), // <- parse as number
        });
    };

    const handleIntervalChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        dispatch({
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_NUMBER_OF_INTERVAL}`,
            payload: Number(newValue), // <- parse as number
        });
    };

    return (
        <FormWrapper>
            <div>Simpsons Rule Integration</div>
            <div>
                <LaTex tex="f(x)" />
                <TextInput fieldName="fn" onChange={handleFnChange} />
            </div>
            <div>
                <NumberOnlyInput
                    fieldName="lowerLimit"
                    onChange={handleLowerLimitChange}
                />
            </div>
            <div>
                <NumberOnlyInput
                    fieldName="upperLimit"
                    onChange={handleUpperLimitChange}
                />
            </div>
            <div>
                <NumberOnlyInput
                    fieldName="Number of intervals"
                    onChange={handleIntervalChange}
                />
            </div>
        </FormWrapper>
    );
}

export default SimpsonForm;
