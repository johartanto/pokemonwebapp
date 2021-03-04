import React from 'react';
import { gql,useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/apollo-get';
import { Pokemon } from './Pokemon';
import { Link } from 'react-router-dom';

export function PokemonContainer(){
    const { loading, error, data, fetchMore} = useQuery(GET_POKEMONS, {
        variables: {limit : 0, offset: 0},
      });
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        
      return(
        <>
        {data.pokemons.results.map(pokemon => <Link key={pokemon.url} to={pokemon.name}><Pokemon key={pokemon.url} pokemon={pokemon} /></Link>)}
        {data.pokemons.next && (
          <button onClick={
            ()=>{
              fetchMore({
                variables:{
                  offset:data.pokemons.results.length,
                },
                updateQuery: (prev,{fetchMoreResult})=>{
                  fetchMoreResult.pokemons.results=[
                    ...prev.pokemons.results,
                    ...fetchMoreResult.pokemons.results
                  ];
                  return fetchMoreResult;
                },
              });
            }
          }>More</button>
        )}
      </>
      )
}