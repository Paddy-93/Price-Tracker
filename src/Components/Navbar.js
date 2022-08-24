import React from 'react'
import { Link } from 'react-router-dom';
import { StyledNav } from './styled';

const Navbar = () => {
    const LINKS = [
        {to: "/", text:"Home",},
        {to:"/favorites", text: "Favorites"}
    ];
  return (
    <StyledNav>
        {
            LINKS.map(link => (
                <Link to={link.to} style={{marginLeft:"2%"}}>{link.text}</Link>
            ))
        }
    </StyledNav>
  )
}

export default Navbar