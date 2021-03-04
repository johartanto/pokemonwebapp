import React from 'react';
import {css,cx} from '@emotion/css';

export function Pokemon({pokemon}){
    return(
        <div className={css`
            flex:25%;
            background-color: #fff;
            text-align: center;
            border-radius: 14px;
            box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
            transition: 0.3s ease-in-out;
            overflow: hidden;
            &:hover{
                box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.2);
            }
            margin: 6px;
            position:relative;
            
        `}>
            
            <p className="pokemon__name">{pokemon.name}</p>
            
            <img className="pokemon__img" src={pokemon.image} alt={pokemon.name} />
        </div>
        )
}