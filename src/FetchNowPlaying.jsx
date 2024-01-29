import React, { useEffect, useState } from 'react';

const FetchNowPlaying = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM5MjYzNmMwOTliZDA2OGE4OGY3OGM0YmNjZjQ2YyIsInN1YiI6IjY1NjYwMmU1MTU2Y2M3MDE0ZTY1ZmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j7NvX1aIpAbGQfwYX1hafyWR7o7kQcYKmkQj1y0UdA'
          }
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await response.json();

        const moviesData = data.results.map(movie => ({
          title: movie.title,
          backdropPath: movie.backdrop_path
        }));

        const randomIndex = Math.floor(Math.random() * moviesData.length);
        const randomMovie = moviesData[randomIndex];

        setSelectedMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className='current'>Currently in theatres ...</h2>
      {selectedMovie && (
        <div className='currentlyInTheatres'>
          <img className="background" src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdropPath}`} alt={selectedMovie.title} />
          <p>{selectedMovie.title}</p>
        </div>
      )}
    </div>
  );
};

export default FetchNowPlaying;


