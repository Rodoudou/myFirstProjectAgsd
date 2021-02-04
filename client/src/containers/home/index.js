import React from "react";
import Article from "../../components/article";
import VideoPresentation from "../../components/VideoPresentation";

import Map from "../../components/map";


const Home=({isDarkMode, isLog}) => {
  console.log("Home - isLog", isLog);
  return (
    <div className="container">
    <div className="row">
    <div className="app">
        <section className="home-content" >
          <Article isDarkMode={isDarkMode}/>
        <VideoPresentation/>
          <Map />
        </section>
    </div>
    </div>
</div>
  );
}

export default Home;
