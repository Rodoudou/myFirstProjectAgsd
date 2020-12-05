import React, { useState, useEffect } from "react";
import Article from "../../components/article";
// import Map from "../../components/map";


function Home({isDarkMode}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
    <div className="row">
    <div className="app">
      {isLoading ? (
        <p>En chargement...</p>
      ) : (
        <section className="home-content" >
          <Article isDarkMode={isDarkMode}/>
          {/* <Map /> */}
        </section>
      )}
    </div>
    </div>
</div>
  );
}

export default Home;
