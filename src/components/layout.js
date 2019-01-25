import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { node } from "prop-types";

const theme = {
    blue: "#60a3bc",
    pink: "#b71540",
    grey: "#444",
    text: "#000"
};

const GlobalStyles = createGlobalStyle`
    html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        line-height: 1.5;
        padding: 0;
        margin: 0;
        min-height: 100vh;
        color: #000;
        font-family: 'Montserrat', sans-serif;
    }
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyles />
            {children}
        </Fragment>
    </ThemeProvider>
);

Layout.propTypes = {
    children: node.isRequired
};

export default Layout;
