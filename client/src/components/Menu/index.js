import React from "react";
import { Link } from "react-router-dom";

const Menu = ({Dark}) => {
 
  return (
    <div>
      <nav className="nav-switch">
        <div className="burger">&#9776;</div>
        <aside>
          <div id="navG">
            <ul>
              <Link to="/">Accueil</Link>
              <Link to="/horaires">Horaires</Link>
              <Link to="/tarifs">Tarifs</Link>
              <Link to="/inscription">Inscription</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
        </aside>

        <div id="navD">
          <ul>
            <Link to="sign_up">M'inscrire</Link>
            <Link to="/login">Me connecter</Link>
          </ul>
          <Dark/>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
