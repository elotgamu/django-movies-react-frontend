import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";

import Header from "./components/Navigation";
import Message from "./components/Message";
import MoviesView from "./views/Movies";

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
            <Route exact path="/" component={Message} />
            <Route path="/movies" component={MoviesView} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
