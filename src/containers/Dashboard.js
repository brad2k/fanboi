import React, { Component } from "react";
import axios from "axios";
import Dashboard from "../pages/Dashboard";

const API_KEY = "2490536e";
const showIds = [
    "tt3526078",
    "tt0367279",
    "tt0944947",
    "tt0805669",
    "tt0386676",
    "tt0105929",
    "tt0043208",
    "tt0358856",
    "tt0159206",
    "tt1759761",
    "tt0795176",
    "tt1877368",
    "tt2211129"
];

class DashboardContainer extends Component {
    constructor() {
        super();

        this.state = {
            shows: [],
            filters: [],
            isLoading: true
        };
    }

    getFilters(res) {
        let compiledGenres = [];

        res.forEach(show => {
            const genres = show.data.Genre.split(", ");
            genres.forEach(genre => {
                if (!compiledGenres.includes(genre)) {
                    compiledGenres.push(genre);
                }
            });
        });

        return compiledGenres.sort();
    }

    getShows() {
        const showData = JSON.parse(localStorage.getItem("shows"));

        if (showData) {
            this.setState({
                shows: showData,
                filters: this.getFilters(showData),
                isLoading: false
            });
        } else {
            let promises = showIds.map(show => {
                return axios({
                    url: `http://www.omdbapi.com/?i=${show}&apikey=${API_KEY}`,
                    method: "GET"
                });
            });

            axios
                .all(promises)
                .then(res => {
                    localStorage.setItem("shows", JSON.stringify(res));
                    return res;
                })
                .then(res => {
                    return {
                        filters: this.getFilters(res),
                        shows: res
                    };
                })
                .then(({ shows, filters }) =>
                    this.setState({ shows, filters, isLoading: false })
                );
        }
    }

    componentDidMount() {
        this.getShows();
    }

    render() {
        const { isLoading, shows, filters } = this.state;

        return !isLoading ? (
            <Dashboard shows={shows} filters={filters} />
        ) : (
            <p>Loading…</p>
        );
    }
}

export default DashboardContainer;
