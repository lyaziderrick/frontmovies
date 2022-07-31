import axios from "axios";
import React ,{useState} from "react";
import Newmovies from "./Newmovies";
import "./search.css"
import Video from './video';







const Search = (props) => {
  
  

  return (
    <div className="centerem">
    <div>
    <h1>LdexMovies</h1> 
    <h5>Find Movies, TV shows and more</h5>  
    </div>  
    <div className="imageone">
    <input value="name"  placeholder="Movie"/>
    <input value="year" placeholder="year"/>
    <button type="submit" className="btn" >Search</button>  
    </div>
    <div><h1>{props.messagex}</h1></div>
    <div><h5>Click Search Button</h5></div>

    <div class="result">  
      <div class="see">   
     <img src ="" alt="N/I"  />
     
        </div>
        <div>
     
       </div>
       <div>
        
        
       </div>  
    </div>
    <div class="displayten"> 
     
    </div>

   </div>
   
  );
}
export default Search


