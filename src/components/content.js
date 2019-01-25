import React from "react";
import styled from "styled-components";

const ContentBox = styled.main`
    max-width: 1280px;
    margin: 4rem auto;
`;

const Content = ({ children, className }) => (
    <ContentBox className={className}>{children}</ContentBox>
);

export default Content;
