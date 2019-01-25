import React from "react";
import styled from "styled-components";
import { shape } from "prop-types";
import { navigate } from "@reach/router";

const ShowLayout = styled.div`
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-column-gap: 2rem;
    background-color: #efefef;
    border: 1px solid #e3e3e3;
    border-bottom: 3px solid ${props => props.theme.pink};
    cursor: pointer;
    transition: all 200ms ease-out;
    padding: 2rem;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    }
`;

const StyledImage = styled.img`
    width: 100%;
    display: block;
`;

const ShowTitle = styled.h2`
    font-weight: 700;
    margin: 0;
    line-height: 1;
    margin-bottom: 0.5rem;
`;

const ShowDesc = styled.p`
    font-size: 1.4rem;
    line-height: 1.5;
`;

const ShowDetails = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.grey};
`;

const ShowInfo = styled.div`
    padding: 1rem 0;
`;

const Show = ({ show }) => {
    return (
        <ShowLayout onClick={() => navigate(`/show/${show.imdbID}`)}>
            <StyledImage src={show.Poster} alt={show.Title} />
            <ShowInfo>
                <ShowTitle>{show.Title}</ShowTitle>
                <ShowDetails>
                    {show.Genre} &bull; {show.Runtime}
                </ShowDetails>
                <ShowDesc>{show.Plot}</ShowDesc>
            </ShowInfo>
        </ShowLayout>
    );
};

Show.propTypes = {
    show: shape({}).isRequired
};

export default Show;
