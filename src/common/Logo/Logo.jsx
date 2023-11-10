import React from 'react'
import sprite from '../../img/sprite.svg'
import { NavLink } from 'react-router-dom'
import { Logotype } from './Logo.styled'

function Logo({size}) {
    return (
        <NavLink to='/'>
            <Logotype size={size}>
                <use href={`${sprite}#icon-logo`} />
            </Logotype>
        </NavLink>
    )
}

export default Logo