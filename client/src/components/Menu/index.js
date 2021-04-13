import React from "react";
import { Link } from "react-router-dom";

const Menu = ({
  Dark,
  token,
  user,
  onLogout,
}) => {

  return (
    <div className="body-menu">
      <div className="page-block">
      <header className="header-main page-block-content">
      <p className="logo-main">AGSD COMBATA</p>
        <nav className="menu-main hamburger-navigation">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger"/>

            <div  className="hamburger-items">
              <Link className="menu-main-item" to="/">Accueil</Link>
              <Link className="menu-main-item" to="/horaires">Horaires</Link>
              <Link className="menu-main-item" to="/tarifs">Tarifs</Link>
              <Link className="menu-main-item" to="/inscription">Inscription</Link>
              <Link className="menu-main-item" to="/contact">Contact</Link>
            </div>
        </nav>

        <div className="menu-main-cta">
          <ul>
            {/* Faire appairaitre "M'inscrire" seulement si je ne suis pas isncrit */}
            {!token ? (
              <div id="barre-vertical">
                {" "}
                <Link className="menu-main-item" to="signup">M'inscrire</Link>
              </div>
            ) : null}



            <div id="login-connect">
              {!token ? (
                <Link className="menu-main-item" to="/login">LogIn</Link>
              ) : (
                <span className="btn-logOut" onClick={onLogout}>
                  LogOut
                </span>
              )}
            </div>
          </ul>
          <Dark />
        </div>
        
        <div className="user_connect">
        {token ? (
          <span>
            User : <span id="user-connect">{user}</span>{" "}
          </span>
        ) : null}
        </div>

      </header>

        
      </div>
    </div>
  );
};

export default Menu;
