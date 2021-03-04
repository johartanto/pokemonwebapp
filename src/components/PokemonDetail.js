import React,{useState} from 'react'
import {css} from '@emotion/css'
import {GET_POKEMON} from '../graphql/apollo-post'
import { gql,useQuery } from '@apollo/client'
import typeColors from '../typeColor'

function PokemonDetail({match}){
    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: {name: match.params.name},
      });
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
    return(
        <div className="details">
            <h1 className={css`text-transform: capitalize;`}>{match.params.name}</h1>
            <div className={css`
                top: 0px;
                left:0px;
                display: flex;
            `}>
            <img className="pokemon__img" src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
            <div className="pokemon__types">
                {
                    data.pokemon.types.map(type => {
                        return (
                            <div key={type.type.name} className={css`border-radius: 10px; text-transform: capitalize; font-size: 22px; padding: 5px;margin:2px;`} style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            </div>
            <button className={css`font-size:large;`}>Catch</button>
            <h3>Abilities</h3>
            <div className="pokemon__abilities">
                {
                    data.pokemon.abilities.map(ability => {
                        return(
                            <div key={ability.ability.name} className={css`text-transform:capitalize;background-color: #fff;border-radius: 14px;box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);transition: 0.3s ease-in-out;overflow: hidden;&:hover{
                                box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.2);
                            } margin:2px;font-size: large;font-weight: bold;`}>
                                {ability.ability.name}
                            </div>
                        )
                    })
                }
            </div>
            <h3>Moves</h3>
            <div className="pokemon__moves">
                {
                    data.pokemon.moves.map(move => {
                        return (
                            <div key={move.move.name} className={css`text-transform:capitalize;background-color: #fff;border-radius: 14px;box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);transition: 0.3s ease-in-out;overflow: hidden;&:hover{
                                box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.2);
                            } margin:2px;font-size: medium;display:flex;`}>
                                {move.move.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PokemonDetail;