import React from "react";
import styled from "styled-components";
import { ReactComponent as TV } from "../svg/tv.svg";

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
        color: #60a3bc;
        margin-top: 1rem;
        font-size: 3rem;

        &:after {
            content: "";
            display: block;
            height: 0.4rem;
            border: 1px solid #60a3bc;
            background: repeating-linear-gradient(
                45deg,
                #60a3bc,
                #60a3bc 2px,
                transparent 2px,
                transparent 4px
            );
            margin-top: 5rem;
        }
    }
`;

const FilterList = styled.div`
    margin-top: 5rem;

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
        <StyledTV />
        <h1>
            Incredible Industries presents:{" "}
            <span>a list of my favorite shows!</span>
        </h1>

        {props.filters && <FilterList>
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
        </FilterList>}
    </TitleColumn>
);

export default TitleColumnComponent;
