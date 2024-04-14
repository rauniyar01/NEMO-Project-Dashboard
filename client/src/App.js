import React from 'react';
import { ApolloClient } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import { ApolloProvider } from 'react-apollo';
import "./styles.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
//import AddParameter from './components/AddParameter';
//import RailData from './components/RailData';
//import HealthSensor from './components/HealthSensor';
//import RoadMHEmitters from './components/RoadMHEmitters';
//import RoadMHEChart from './components/RoadMHEChart'; 
//import RoadData from './components/RoadData';
import { InMemoryCache } from 'apollo-cache-inmemory';
//import { useAuth0 } from "@auth0/auth0-react";
import { setContext } from '@apollo/client/link/context';
//import AddParameter from './components/AddParameter';

const httpLink = new HttpLink({
  //domain: 'https://nemo-cities.eu.auth0.com/oauth/token',
  uri: 'https://querying.cloud.nemo-cities.eu/v1/graphql',
  //audience: 'https://querying.cloud.nemo-cities.eu/api'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //const token = localStorage.getItem('https://nemo-cities.eu.auth0.com/oauth/token'); 
  //const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      //authorization: token ? `Bearer ${token}` : null,
      authorization: `Bearer Token`
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      {/* <div>
        <h2> Medium-High Emitters Vehicles </h2>
        < RoadMHEChart />
      </div> */}
     <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
      </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
