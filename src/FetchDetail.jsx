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
        data.vote_average = Number(data.vote_average).toFixed(1);
        setMovieDetails(data);
        const hours = Math.floor(data.runtime / 60);
        const minutes = data.runtime % 60;
        data.runtime = `${hours}h${minutes}m`;
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
    
  }, [movieId]); // Include movieId in the dependency array to re-run the effect when movieId changes
// console.log(movieDetails);



  return (
    
    <>
      {movieDetails && (
        <div className='detailContainer'>

          <div className='detailImg'>
            <img className="detailImg"src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt={movieDetails.title} />
          </div>

          <div className='TitleDetailPage'>{movieDetails.title}</div>
          <div className='Genre'>{movieDetails.genres?.map((genre, index) => (
            <p className='detailGenre' key={index}>{genre.name}</p>
        ))}</div>
          <div className='overview'>
            <p className='synopsisTitle'>Synopsis : </p>
            <p className='synopsis'>{movieDetails.overview}</p>
          </div>


          <div className='bottomDetails'>
            <div className='Release'> Release Date: {movieDetails.release_date}</div>
            <div className='Runtime'>{movieDetails.runtime}</div>
            <div className='Vote'>{movieDetails.vote_average}/10</div>
          </div>
    
        </div>
        
      )}
    </>
  );
};

export default FetchDetail;
