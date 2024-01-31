import React, { useEffect, useState } from 'react';

const FetchDetail = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // console.log(movieId);
    const fetchMovieDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM5MjYzNmMwOTliZDA2OGE4OGY3OGM0YmNjZjQ2YyIsInN1YiI6IjY1NjYwMmU1MTU2Y2M3MDE0ZTY1ZmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j7NvX1aIpAbGQfwYX1hafyWR7o7kQcYKmkQj1y0UdA'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]); // Include movieId in the dependency array to re-run the effect when movieId changes
// console.log(movieDetails);
  return (
    <div>
      {movieDetails && (
        <p>
          Original Title: {movieDetails.original_title}<br />
          Genres: {movieDetails.genres?.map(genre => genre.name).join(', ')}<br />
          Overview: {movieDetails.overview}<br />
          Popularity: {movieDetails.popularity}<br />
          Production Companies: {movieDetails.production_companies?.map(company => company.name).join(', ')}<br />
          Production Countries: {movieDetails.production_countries?.map(country => country.name).join(', ')}<br />
          Release Date: {movieDetails.release_date}<br />
          Runtime: {movieDetails.runtime}<br />
          Revenue: {movieDetails.revenue}<br />
          Tagline: {movieDetails.tagline}<br />
          Vote Average: {movieDetails.vote_average}<br />
          Vote Count: {movieDetails.vote_count}
        </p>
      )}
    </div>
  );
};

export default FetchDetail;
