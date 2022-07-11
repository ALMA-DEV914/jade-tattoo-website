import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import TopNav from './components/TopNav';
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import Gallery from './pages/Gallery';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container-fluid">
          <TopNav />
          <div className="container-fluid">
            <Switch>
            <Route exact path="/" component={Homepage} />
              <Route exact path="/reviews" component={Reviews} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />

            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
