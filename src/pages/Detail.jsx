import React from 'react';
import { useParams } from 'react-router-dom';
import FetchDetail from '../FetchDetail';



const Detail = function () {
  const { movieId } = useParams();

  return (
    <>
      <FetchDetail />
    </>
  );
};

export default Detail;
