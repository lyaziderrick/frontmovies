import React from "react";
import "./newmovies.css"
import axios from "axios"
var myloop = [];
var myloopone = [];
var mylooptwo = [];
var myloopthree = [];
const baseURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=8afe774cf2385a9b1b686f089798daac&language=en-US&page=1";
const url="http://image.tmdb.org/t/p/w185";
function Newmovies(){
const [post, setPost] = React.useState(null);

React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  for (let i = 0; i < 4; i++) {
    myloop.push(
        <div className="bla"> 
        <img src={url + post.results[i].poster_path} alt="img"/>  
        <h6>{post.results[i].original_title}</h6> 
        <div className="arrange_data">   
        <h5>{post.results[i].release_date}</h5>
        <h5>{post.results[i].vote_count}</h5>  
      </div> 
      </div>
    );
  }
  for (let i = 4; i < 8; i++) {
    myloopone.push(
        <div className="bla"> 
        <img src={url + post.results[i+4].poster_path} alt="img"/>  
        <h6>{post.results[i+4].original_title}</h6> 
        <div className="arrange_data">   
        <h5>{post.results[i+4].release_date}</h5>
        <h5>{post.results[i+4].vote_count}</h5>  
      </div> 
      </div>
    );
  }
  for (let i = 8; i < 12; i++) {
    mylooptwo.push(
        <div className="bla"> 
        <img src={url + post.results[i+8].poster_path} alt="img"/>  
        <h6>{post.results[i+8].original_title}</h6> 
        <div className="arrange_data">   
        <h5>{post.results[i+8].release_date}</h5>
        <h5>{post.results[i+8].vote_count}</h5>  
      </div> 
      </div>
    );
  }
  for (let i = 12; i < 16; i++) {
    myloopthree.push(
        <div className="bla"> 
        <img src={url + post.results[i].poster_path} alt="img"/>  
        <h6>{post.results[i].original_title}</h6> 
        <div className="arrange_data">   
        <h5>{post.results[i].release_date}</h5>
        <h5>{post.results[i].vote_count}</h5>  
      </div> 
      </div>
    );
  }
  
 
    return(
        <div>
     <h1>New Movies</h1>   
    <div className="vap">  
        <div>
        {myloop} 
        </div>
        <div>
        {myloopone} 
        </div>
        <div>
        {mylooptwo} 
        </div>
        <div>
        {myloopthree} 
        </div>
    </div>
   </div>
    )
}
export default Newmovies