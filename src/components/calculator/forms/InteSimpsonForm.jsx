import React from 'react';
import styled from 'styled-components';
import TextInput from '../../common/TextInput';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
// import useGraphStateContext from '../../../hooks/useGraphState';
// import { graphDispatchActions } from '../../../context/constants';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const state = {
    fn: '',
    upperLimit: 1,
    lowerLimit: 0,
    interval: 1,
};

function SimpsonForm() {
    // const [state, dispatch] = useGraphStateContext();

    // if (!state || !dispatch) {
    //     throw new Error(
    //         'Form must be wrapped in a GraphContextProvider component',
    //     );
    // }

    const handleFnChange = (oldValue, newValue) => {
        console.log(oldValue, newValue);
        state.method = "Simpson's 1/3 Rule";
        // dispatch({
        //     type: graphDispatchActions.UPDATE_FN,
        //     payload: newValue,
        // });
    };

    const handleLowerLimitChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = "Simpson's 3/8 Rule";
        // dispatch({
        //     type: graphDispatchActions.UPDATE_LOWER_LIMIT,
        //     payload: Number(newValue), // <- parse as number
        // });
    };

    const handleUpperLimitChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = "Simpson's 3/8 Rule";
        // dispatch({
        //     type: graphDispatchActions.UPDATE_UPPER_LIMIT,
        //     payload: Number(newValue), // <- parse as number
        // });
    };

    const handleIntervalChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = "Simpson's 3/8 Rule";
        // dispatch({
        //     type: graphDispatchActions.UPDATE_NUMBER_OF_INTERVAL,
        //     payload: Number(newValue), // <- parse as number
        // });
    };

    return (
        <FormWrapper>
            <div>Simpson&apos;s Rule Integration</div>
            <div>
                <TextInput fieldName="Function" onChange={handleFnChange} />
            </div>
            <div>
                <NumberOnlyInput
                    fieldName="Lower Limit"
                    onChange={handleLowerLimitChange}
                />
            </div>
            <div>
                <NumberOnlyInput
                    fieldName="Upper Limit"
                    onChange={handleUpperLimitChange}
                />
            </div>
            <div>
                <NumberOnlyInput
                    fieldName="Number of Intervals"
                    onChange={handleIntervalChange}
                />
            </div>
        </FormWrapper>
    );
}

export default SimpsonForm;
