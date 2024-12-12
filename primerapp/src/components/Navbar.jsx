import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <CartWidget />
        </li>
      </ul>
      <ItemListContainer greeting="¡Bienvenido a Monkey Cookies!" />
    </nav>
  );
}

export default Navbar;