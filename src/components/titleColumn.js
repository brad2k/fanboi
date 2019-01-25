import React from "react";
import styled from "styled-components";
import { ReactComponent as TV } from "../svg/tv.svg";
import { Link } from "@reach/router";
import { arrayOf, func, string } from "prop-types";

const StyledTV = styled(TV)`
    display: block;
    width: 50%;
    transition: fill 200ms ease-out;

    &:hover {
        fill: #b71540;
    }
`;

const TitleColumn = styled.aside`
    line-height: 1.1;

    span {
        display: block;
        color: ${props => props.theme.blue};
        margin-top: 1rem;
        font-size: 3rem;
        font-weight: 400;
    }
`;

const FilterList = styled.div`
    margin-top: 5rem;

    &:before {
        content: "";
        display: block;
        height: 0.4rem;
        border: 1px solid ${props => props.theme.blue};
        background: repeating-linear-gradient(
            45deg,
            ${props => props.theme.blue},
            ${props => props.theme.blue} 2px,
            transparent 2px,
            transparent 4px
        );
        margin-bottom: 5rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    input {
        margin-right: 1rem;
    }
`;

const FilterOption = props => (
    <li>
        <input
            type="checkbox"
            id={`${props.label}-box`}
            defaultChecked={props.active}
            onChange={props.setFilter}
            value={props.label}
        />
        <label htmlFor={`${props.label}-box`}>{props.label}</label>
    </li>
);

const TitleColumnComponent = props => (
    <TitleColumn>
        <Link to="/">
            <StyledTV />
        </Link>
        <h1>
            Incredible Industries presents:{" "}
            <span>a list of my favorite shows!</span>
        </h1>

        {props.filters && (
            <FilterList>
                <p>Filter by genre:</p>
                <ul>
                    {props.filters.map(filter => (
                        <FilterOption
                            label={filter}
                            key={filter}
                            active={props.activeFilters.includes(filter)}
                            setFilter={props.setFilter}
                        />
                    ))}
                </ul>
            </FilterList>
        )}
    </TitleColumn>
);

TitleColumnComponent.propTypes = {
    filters: arrayOf(string),
    activeFilters: arrayOf(string),
    setFilter: func
}

export default TitleColumnComponent;
