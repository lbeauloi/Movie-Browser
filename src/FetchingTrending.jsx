import React, { useState, useEffect } from 'react';

const FetchingTrending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const apiKey = '35c92636c099bd068a88f78c4bccf46c'; 
      const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
      }
    };

    fetchTrending();
  }, []); // Exécute une seule fois au montage du composant

  return (
    <>
    <h2>Trending</h2>
    {movies.map((movie) => (
          <div>
              <img key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
    </>
  );
};

export default FetchingTrending;
