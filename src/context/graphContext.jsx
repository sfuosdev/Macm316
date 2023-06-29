import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import graphRootReducer, { initialRootGraphState } from './graphRootReducer';

const GraphStateContext = createContext();

function GraphContextProvider({ children }) {
    const [state, dispatch] = useReducer(
        graphRootReducer,
        initialRootGraphState,
    );

    return (
        <GraphStateContext.Provider
            value={useMemo(() => {
                return [state, dispatch];
            }, [state, dispatch])}
        >
            {children}
        </GraphStateContext.Provider>
    );
}

GraphContextProvider.propTypes = {
    children: PropTypes.node,
};

GraphContextProvider.defaultProps = {
    children: null,
};
export { GraphStateContext, GraphContextProvider };
