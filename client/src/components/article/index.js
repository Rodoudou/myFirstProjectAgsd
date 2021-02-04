import React from "react";
import titles from "../../titres.json";
const Article = ({ isDarkMode }) => {
  return (
    <section className="article-content">
      <h1 className="centered">{titles.TitleHome}</h1>
      <p className="centered-bis">AGSD COMBAT</p>
      <br />

      <div className="article-home" >
        <p>Femmes et Hommes de tous âges</p>
        <p>
          Pratiquer en loisir le MMA, Judo, JiuJitsu Brésilien, Grappling ou de
          la Boxe, c’est apprendre les rudiments et se perfectionné dans tous
          les domaines que ce soit technique, tactique, physique et mental.
          <br />
          Il n’y a pas de compétition, le but est de pratiquer un sport de
          combat dans la bonne humeur, sans intention de faire mal.
          <br />
          Les entraînements sont intensifs et complets : des séances axées sur
          la technique et à la préparation physique. Il y a meme des cours dédié
          exclusivement aux femmes comme le Lady Boxing.
          <br />
          Le club est facilement accessible pour ceux qui habitent ces villes :
          Paris, Franc-moisin, Stains, Aubervilliers, Saint-Ouen ,Pierrefitte,
          La Courneuve, Epinay sur seine.
        </p>
      </div>

    </section>
  );
};

export default Article;
