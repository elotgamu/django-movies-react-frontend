import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

import Header from "./components/Navigation";
import Message from "./components/Message";
import MoviesView from "./views/Movies";
import MoviesDetailView from "./views/MovieDetails";
import ActorsView from "./views/Actors";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Message} />
              <Route path="/movies" component={MoviesView} exact />
              <Route path="/movies/:id" component={MoviesDetailView} exact />
              <Route path="/actors" component={ActorsView} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
