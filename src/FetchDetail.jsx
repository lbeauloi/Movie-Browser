import React, { useEffect, useState } from 'react';

const FetchDetail = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM5MjYzNmMwOTliZDA2OGE4OGY3OGM0YmNjZjQ2YyIsInN1YiI6IjY1NjYwMmU1MTU2Y2M3MDE0ZTY1ZmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j7NvX1aIpAbGQfwYX1hafyWR7o7kQcYKmkQj1y0UdA'
        }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/1075794?language=en-US', options);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      {movieDetails && (
        <div className='details'>
          <h1>{movieDetails.title}</h1>
          <img src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt="Backdrop" />
          <p>Overview: {movieDetails.overview}</p>
        </div>
      )}    
    </div>
  );
};

export default FetchDetail;
