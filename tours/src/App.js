import React, { useState, useEffect } from "react";
import Loading from "./important/Loading";
import Tours from "./important/Tour";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const removeTour = (id) => {
    let newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  };

  const fetchUrl = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const place = await response.json();
      setPlaces(place);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (places.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchUrl()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="loading">
        <h2>Our Tours</h2>
      </div>
      <div className="myAlign">
        {places.map((place) => {
          return <Tours tours={place} removeTour={removeTour} />;
        })}
      </div>
    </main>
  );
}
export default App;
