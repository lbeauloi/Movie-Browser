import React from 'react';
import { useParams } from 'react-router-dom';
import FetchDetail from '../FetchDetail';



const Detail = function () {
  const { movieId } = useParams();

  return (
    <>
      <h2>Movie Detail</h2>
      <p>Movie ID: {movieId}</p>
      <FetchDetail />
    </>
  );
};

export default Detail;
