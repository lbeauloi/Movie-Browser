import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import React, { useState, useEffect } from 'react';


const Discover = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM5MjYzNmMwOTliZDA2OGE4OGY3OGM0YmNjZjQ2YyIsInN1YiI6IjY1NjYwMmU1MTU2Y2M3MDE0ZTY1ZmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j7NvX1aIpAbGQfwYX1hafyWR7o7kQcYKmkQj1y0UdA',
          },
        };

        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>
        <span className="titleColor">Movie</span>Browser
      </h1>
      <SearchBar />
      <div className="catalogue">
        {movies.map((movie) => (
          <div key={movie.id} className={`film ${movie.id}`}>
            <Link to={`/detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="movieTitle">{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Discover;

