import SearchBar from "../SearchBar";
import FetchingTrending from "../FetchingTrending";
import { Link } from "react-router-dom";

const Discover = () => {


  return (
    <>
      <h1><span className="titleColor">Movie</span>Browser</h1>
      <SearchBar />
      <div className="film 1">
        <Link to="/detail"><div className="image"></div>
        <p>Soul (2020)</p>
        </Link>
      </div>
      
      <FetchingTrending/>  
    </>
  );
};

export default Discover;

