import React from "react";

function Article() {
  return (
    <section>
      <h1>
        AGSD COMBAT Saint-Denis 93200 : Mixed Martial Arts (MMA), Judo, Jiu
        Jitsu Brésilien (JJB), Grappling, Boxe Muay Thaï et Lady Boxing à
        Saint-Denis
      </h1>
      <br/>

      <div className="article-home">
        <p>Femmes et Hommes de tous âges</p>
        <br />
        <p>
          Pratiquer en loisir le MMA, Judo, JiuJitsu Brésilien, Grappling ou de
          la Boxe, c’est apprendre les rudiments et se perfectionné dans tous
          les domaines que ce soit technique, tactique, physique et mental.
        </p>
        <br />
        <p>
          Il n’y a pas de compétition, le but est de pratiquer un sport de
          combat dans la bonne humeur, sans intention de faire mal.
        </p>
        <br />
        <p>
          Les entraînements sont intensifs et complets : des séances axées sur
          la technique et à la préparation physique.
        </p>

        <p>
          Il y a meme des cours dédié exclusivement aux femmes comme le Lady
          Boxing.
        </p>
        <br />
        <p>
          Le club est facilement accessible pour ceux qui habitent ces villes :
          Paris, Franc-moisin, Stains, Aubervilliers, Saint-Ouen ,Pierrefitte,
          La Courneuve, Epinay sur seine.
        </p>
      </div>
      <div className="video">
      <iframe width="496" height="279" title="agsdcombat" src="https://www.youtube.com/embed/PYpg6k44ZNw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscree="true">

      </iframe>
      </div>
    </section>
  );
}

export default Article;
