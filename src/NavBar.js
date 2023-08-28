import React from 'react';
import {NavLink} from "react-router-dom"


const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => {
  return (
    <div className= "navbar" >
      <NavLink to = "/"
      exact 
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}
      >
        Home
      </NavLink>
      <NavLink to = "/movies"
      exact
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}
      >
        Movies
      </NavLink>
    </div>
  )
}

export default NavBar