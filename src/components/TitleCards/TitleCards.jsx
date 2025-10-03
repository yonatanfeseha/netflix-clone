import React, { useRef, useEffect, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/card_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, catgory }) => {
  const [apiData, setApiData] = useState([]);
  // const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTc1ZWM4YTJkNmQ3NDM0M2MzOTA2MmFiYzRlNjYyMyIsIm5iZiI6MTc1OTMyNTY5NS45MzIsInN1YiI6IjY4ZGQyZGZmMzQ5NTlhMTQxOWJiMWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2cD7NRxt7-C2q0J-FclDztjtkrk5t8Fnpg6iDYcRfjw",
    },
  };

  // const handleWheel = (event) => {
  //   event.preventDefault;
  //   cardsRef.current.scrollLeft += event.deltaY;
  // };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        catgory ? catgory : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    // cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"} </h2>
      <div className="card-list" /**ref={cardsRef}**/>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
