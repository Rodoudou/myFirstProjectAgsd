import React from "react";
import Tarifs from "../../containers/tarifs";
import { Link } from "react-router-dom";


const Menu = () => {

  return (
    <div>
      <nav>
        <div class="burger">&#9776;</div>
        <aside>
          <div id="navG">
            <ul>
              <Link to="/">Accueil</Link>
              <Link to="/horaires">Horaires</Link>
              <Link to="tarifs">Tarifs</Link>
              <Link to="/inscription">Inscription</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
        </aside>

        <div id="navD">
          <ul>
            <Link to="#">M'inscrire</Link>
            <Link to="#">Me connecter</Link>
          </ul>
        </div>
      </nav>
     
    </div>
  );
};

export default Menu;
