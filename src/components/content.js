import React from "react";
import styled from "styled-components";
import { node, string } from "prop-types";

const ContentBox = styled.main`
    max-width: 1280px;
    margin: 4rem auto;
`;

const Content = ({ children, className }) => (
    <ContentBox className={className}>{children}</ContentBox>
);

Content.defaultProps = {
    className: ""
};

Content.propTypes = {
    children: node.isRequired,
    className: string
};

export default Content;
