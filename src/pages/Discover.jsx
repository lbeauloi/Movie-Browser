import { Link } from "react-router-dom";
const Discover = function(){
    return(
    <>
  
  <h1><span className="titleColor">Movie</span>Browser</h1>
    <div className="catalogue">
      <div className="film 1">
        <Link to="/detail"><div className="image"></div>
        <p>Soul (2020)</p>
        </Link>
      </div>

      <div className="film 2">
      <div className="image"></div>
        <p>Knives Out (2019)</p>
      </div>

      <div className="film 3">
      <div className="image"></div>
        <p>Onward (2020)</p>
      </div>

      <div className="film 4">
      <div className="image"></div>
        <p>Mulan (2020)</p>
      </div>

      <div className="film 5">
      <div className="image"></div>
        <p>Birds of Prey (2020)</p>
      </div>

      <div className="film 6">
      <div className="image"></div>
        <p>Ready Player (2018)</p>
      </div>
    </div>
    </>
      
      
    
    );
   };
   export default Discover