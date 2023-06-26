import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

function ThemeProvider({ children }) {
    const theme = {};

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
