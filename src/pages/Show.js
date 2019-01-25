import React, { Fragment } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ContentGrid from "../components/contentGrid";
import TitleColumn from "../components/titleColumn";

const ShowLayout = styled.section`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 5rem;
`;

const StyledImage = styled.img`
    display: block;
    width: 100%;
`;

const ShowInfo = styled.div``;

const ShowTitle = styled.h1`
    font-size: 6rem;
    line-height: 1;
    margin: 0 0 2rem;
`;

const ShowDetails = styled.div`
    color: ${props => props.theme.grey};
    font-size: 1.2rem;
`;

const ShowDesc = styled.p``;

const Plot = styled.p`
    padding: 2rem;
    border: 1px solid ${props => props.theme.grey};
    border-radius: 1rem 0 1rem 0;
`;

const ShowPage = props => {
    const show = props.show.data;

    return (
        <Fragment>
            <Helmet>
                <title>{show.Title}</title>
            </Helmet>
            <ContentGrid>
                <TitleColumn />
                <ShowLayout>
                    <StyledImage src={show.Poster} alt={show.Title} />
                    <ShowInfo>
                        <ShowTitle>{show.Title}</ShowTitle>
                        <ShowDesc>
                            A <b>{show.Type.toLowerCase()}</b> that began airing
                            in <b>{show.Released}</b> with a total of{" "}
                            <b>{show.totalSeasons} seasons</b> to date.
                        </ShowDesc>
                        <ShowDesc>
                            It stars{" "}
                            {show.Actors.split(", ").map(
                                (actor, index, arr) => {
                                    let returnStr;
                                    if (index === arr.length - 1) {
                                        returnStr = ` and ${actor}`;
                                    } else {
                                        returnStr = `${actor}, `;
                                    }
                                    return returnStr;
                                }
                            )}
                            .
                        </ShowDesc>
                        <Plot>{show.Plot}</Plot>
                        <ShowDetails>
                            {show.Genre} &bull; {show.Runtime} &bull;{" "}
                            {show.Language}
                        </ShowDetails>
                    </ShowInfo>
                </ShowLayout>
            </ContentGrid>
        </Fragment>
    );
};

export default ShowPage;
