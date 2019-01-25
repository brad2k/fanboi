import styled from "styled-components";
import Content from "../components/content";

const ContentGrid = styled(Content)`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 5rem;
`;

export default ContentGrid;
