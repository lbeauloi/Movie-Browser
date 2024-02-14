import React, { useState, useEffect } from 'react';

function Discover() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM5MjYzNmMwOTliZDA2OGE4OGY3OGM0YmNjZjQ2YyIsInN1YiI6IjY1NjYwMmU1MTU2Y2M3MDE0ZTY1ZmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j7NvX1aIpAbGQfwYX1hafyWR7o7kQcYKmkQj1y0UdA'
        }
      })
        .then(response => response.json())
        .then(data => {
          const promises = data.results.map(movie =>
            fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
              headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM5MjYzNmMwOTliZDA2OGE4OGY3OGM0YmNjZjQ2YyIsInN1YiI6IjY1NjYwMmU1MTU2Y2M3MDE0ZTY1ZmZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j7NvX1aIpAbGQfwYX1hafyWR7o7kQcYKmkQj1y0UdA'
              }
            }).then(response => response.json())
          );

          Promise.all(promises).then(videoData => {
            const moviesWithVideos = data.results.map((movie, index) => ({
              ...movie,
              video: videoData[index].results[0]
            }));

            setData(moviesWithVideos);
          });
        });
    }
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search for a movie..." />
      
      {data.map((movie) => (
        <div className='containerDiscover' key={movie.id}>
          <h2 className='titleDiscover'>{movie.title}</h2>
          <img className="imageDiscover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          {movie.video && <iframe title={movie.title} src={`https://www.youtube.com/embed/${movie.video.key}`} />}
        </div>
      ))}
    </>
  );
}

export default Discover;

