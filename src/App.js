import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider, InMemoryCache } from "@apollo/react-hooks";
import {css,cx} from '@emotion/css';
import { PokemonContainer } from "./components/PokemonContainer";
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CapturedPokemon from "./components/CapturedPokemon";
import PokemonDetail from './components/PokemonDetail';

function App() {
  const client=new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <Router>
      <ApolloProvider client={client}>
        <Nav />
        <div className={css`
              display: flex;
              flex-wrap:wrap;
              justify-content: center;
              padding: 10px;
              position:relative;
              font-family: 'Trebuchet MS', sans-serif;
              text-transform: capitalize;
          `}>
          <Switch>
            <Route path="/" exact component={PokemonContainer} />
            <Route path="/mypokemon" component={CapturedPokemon} />
            <Route path="/:name" component={PokemonDetail} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>

  );
}

export default App;
