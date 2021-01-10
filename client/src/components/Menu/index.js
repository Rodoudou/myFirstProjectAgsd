import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Menu = ({Dark,token, setToken, username ,isLog,setIsLog, onLogout}) => {
 
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
          {/* Faire appairaitre "M'inscrire" seulement si je ne suis pas isncrit */}
            {!token ?<div id="barre-vertical"> <Link to="sign_up">M'inscrire</Link></div>:null}

            <div id="login-connect">
            {!token ? (
              <Link to="/login">LogIn</Link>):(<span className="btn-logOut" onClick={onLogout}>LogOut</span>
            )}
            </div>
          </ul>
          <Dark/>
        </div>
            {token ? <span>User : <span id="user-connect">{username}</span> </span>:null}
      </nav>
    </div>
  );
};

export default Menu;
