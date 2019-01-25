import React from "react";
import styled from "styled-components";
import Show from "../components/show";
import TitleColumn from "../components/titleColumn";
import ContentGrid from "../components/contentGrid";

const ShowGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showsOnDisplay: this.props.shows,
            activeFilters: this.props.filters
        };
    }

    setFilter = e => {
        let activeFilters = this.state.activeFilters.slice(0);
        const val = e.target.value;

        if (e.target.checked) {
            // Checking — add to the active filters
            activeFilters.push(val);
        } else {
            // Unchecking — remove from the active filters
            activeFilters = activeFilters.filter(item => item !== val);
        }

        this.setState({
            activeFilters,
            showsOnDisplay: this.props.shows.filter(
                show => !this.state.activeFilters.includes(show.data.Genre)
            )
        });
    };

    render() {
        const { showsOnDisplay } = this.state;

        return (
            <ContentGrid>
                <TitleColumn
                    filters={this.props.filters}
                    activeFilters={this.state.activeFilters}
                    setFilter={this.setFilter}
                />
                <ShowGrid>
                    {showsOnDisplay.map(show => {
                        const showData = show.data;
                        return <Show show={showData} key={showData.imdbID} />;
                    })}
                </ShowGrid>
            </ContentGrid>
        );
    }
}

export default Dashboard;
