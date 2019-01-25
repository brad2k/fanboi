import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

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
    <Fragment>
        <GlobalStyles />
        {children}
    </Fragment>
);

export default Layout;
