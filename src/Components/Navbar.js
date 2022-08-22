import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const LINKS = [
        {to: "/", text:"Home",},
        {to:"/favorites", text: "Favorites"}
    ];
  return (
    <div>
        {
            LINKS.map(link => (
                <Link to={link.to} style={{marginLeft:"2%"}}>{link.text}</Link>
            ))
        }
    </div>
  )
}

export default Navbar