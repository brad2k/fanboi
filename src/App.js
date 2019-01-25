import React, { Component } from "react";
import { Router } from "@reach/router";
import DashboardContainer from "./containers/Dashboard";
import ShowContainer from "./containers/Show";
import Layout from "./components/layout";

class App extends Component {
    render() {
        return (
            <Layout>
                <Router>
                    <DashboardContainer path="/" />
                    <ShowContainer path="show/:showId" />
                </Router>
            </Layout>
        );
    }
}

export default App;
