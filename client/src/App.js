import React from "react";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import SingleThought from "./pages/SingleThought";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile"
import "./index.css";

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
})


function App() {
  return (
   <ApolloProvider client={client}>
    <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/thought/:id" element={<SingleThought/>} />
      <Route path="/profile/:username?" element={<Profile/>} />
    </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
