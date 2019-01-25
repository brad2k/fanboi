import React, { Component } from "react";
import axios from "axios";
import Show from "../pages/Show";

const API_KEY = "2490536e";

class ShowContainer extends Component {
    constructor() {
        super();

        this.state = {
            show: null,
            isLoading: true
        };
    }

    getShow() {
        axios
            .get(
                `http://www.omdbapi.com/?i=${
                    this.props.showId
                }&apikey=${API_KEY}`
            )
            .then(show => this.setState({ show, isLoading: false }));
    }

    componentDidMount() {
        this.getShow();
    }

    render() {
        const { isLoading, show } = this.state;

        return !isLoading ? <Show show={show} /> : <p>Loading…</p>;
    }
}

export default ShowContainer;
