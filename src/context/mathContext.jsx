import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const Mathcontext = createContext();

function MathContextProvider({ children }) {
    return <Mathcontext.Provider>{children}</Mathcontext.Provider>;
}

MathContextProvider.propTypes = {
    children: PropTypes.node,
};

MathContextProvider.defaultProps = {
    children: null,
};

export default MathContextProvider;
