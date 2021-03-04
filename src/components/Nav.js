import React, { PureComponent } from 'react'
import {css,cx} from '@emotion/css'
import { Link } from 'react-router-dom'

function Nav(){
    const navStyle={
        color:'white'
    };
    return(
        <nav className={css`
            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 10vh;
            background: #c93e4f;
            color: white;
        `
        }>
            <h3>PokeApp</h3>
            <ul className={css`
                width:40%;
                display:flex;
                justify-content:space-around;
                align-items:center;
                list-style:none;

            `}>
                <Link style={navStyle} to="/">
                    <li>Pokedex</li>
                </Link>
                <Link style={navStyle} to="/mypokemon">
                    <li>My Pokemon</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;