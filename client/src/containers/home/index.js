import React from "react";
import Article from "../../components/article";
import VideoPresentation from "../../components/VideoPresentation";
// import Map from "../../components/map";


function Home({isDarkMode}) {

  return (
    <div className="container">
    <div className="row">
    <div className="app">
        <section className="home-content" >
          <Article isDarkMode={isDarkMode}/>
        <VideoPresentation/>
          {/* <Map /> */}
        </section>
    </div>
    </div>
</div>
  );
}

export default Home;
