import React from "react";
import Newmovies from "./newmovies/Newmovies";
import Search from "./search/search";
const Home =() =>{
    return(
      <div className="papa">
        <Search/>
        <Newmovies/>
      </div>
    )
}
export default Home