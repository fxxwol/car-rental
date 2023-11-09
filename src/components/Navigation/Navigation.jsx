import React from 'react'
import { Navigations, NavigationLink } from './Navigation.styled'

function Navigation() {
    return (
            <Navigations>
                <NavigationLink to='/'>Home</NavigationLink>
                <NavigationLink to='/catalog'>Catalog</NavigationLink>
                <NavigationLink to='/favorites'>Favorites</NavigationLink>
            </Navigations>
    )

}

export default Navigation