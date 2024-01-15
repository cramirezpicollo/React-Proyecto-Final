import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import "./Nav.css"


const Nav = () => {
    return (
        <header>
            <Link className='titulo' to="/">
                <h1>TIENDA FELIZ NAVIDAD JoJoJo</h1>

            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className='navCat' to="categoria/adultos">ADULTOS</NavLink>
                    </li>

                    <li>
                        <NavLink className='navCat' to="categoria/ninos">NIÑOS</NavLink>
                    </li>
                </ul>

            </nav>

            <CartWidget/>

        </header>

    )
}

export default Nav