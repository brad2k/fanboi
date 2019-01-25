import React, { Fragment } from "react";
// import styled from "styled-components";
import { Helmet } from "react-helmet";
import Show from "../components/show";
import ContentGrid from "../components/contentGrid";
import TitleColumn from "../components/titleColumn";

const ShowPage = props => {
    console.log(props);
    const showData = props.show.data;
    return (
        <Fragment>
            <Helmet>
                <title>{showData.Title}</title>
            </Helmet>
            <ContentGrid>
                <TitleColumn />
                <Show show={showData} key={showData.imdbID} />
            </ContentGrid>
        </Fragment>
    );
};

export default ShowPage;
