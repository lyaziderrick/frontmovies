import React ,{ useState,useRef }from "react";
import "./newmovies.css"
import axios from "axios"
import Search from "./search";
import {Link} from 'react-router-dom';

 
var myloop = [];
let vap;
var myloopone = [];
var mylooptwo = [];
var myloopthree = [];
const baseURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=8afe774cf2385a9b1b686f089798daac&language=en-US&page=1";
const url="http://image.tmdb.org/t/p/w185"; 
const Newmovies = (props) =>{
  const isLoading = useRef(false);
  isLoading.current = true; 
const [post, setPost] = React.useState(null);
const [count, setCount] = useState("");
React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  for (let c = 0; c < 4; c++) {
    myloop.push( 
        <div className="bla"> 
        <img src={url + post.results[c].poster_path} alt="img"  onClick={() =>
          setCount([post.results[c].original_title])}
          />  
        <div className="word">  
        <h6>{post.results[c].original_title}  ({post.results[c].release_date})</h6>  
        
      </div> 
      </div>
    );
  }
  for (let i = 4; i < 8; i++) {
    myloopone.push(
        <div className="bla"> 
        <img src={url + post.results[i].poster_path} alt="img"  onClick={() => setCount([post.results[i].original_title])}/>  
        <div className="word">   
        <h6>{post.results[i].original_title}  ({post.results[i].release_date})</h6> 
      </div> 
      </div>
    );
  }
  for (let i = 8; i < 12; i++) {
    mylooptwo.push(
        <div className="bla"> 
        <img src={url + post.results[i+8].poster_path} alt="img" onClick={() => setCount([post.results[i+8].original_title])}/>
        <div className="word">  
        <h6>{post.results[i+8].original_title}  ({post.results[i+8].release_date})</h6>  
        </div>    
      </div>
    );
  }
  for (let i = 12; i < 16; i++) {
    
    myloopthree.push(
        <div className="bla"> 
        <img src={url + post.results[i].poster_path} alt="img" onClick={() => setCount([post.results[i].original_title])}/> 
        <div className="word">   
        <h6>{post.results[i].original_title}  ({post.results[i].release_date})</h6> 
      </div> 
      </div>
    );
  }
  
 
    return(
        <div>
      <Search messagex={count}/>    
     <h1>Now Showing</h1>  
     if({isLoading == true}){ 
    <div className="vap">  
    
        <div>
        {myloop} 
        {isLoading.current = false}
        </div>
        <div>
        {myloopone} 
        {isLoading.current = false}
        </div>
        <div>
        {mylooptwo} 
        {isLoading.current = false}
        </div>
        <div>
        {myloopthree} 
        {isLoading.current = false}
        </div>
    </div> 
}
   </div>
    )
}

export default Newmovies