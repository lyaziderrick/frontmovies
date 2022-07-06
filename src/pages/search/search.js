import axios from "axios";
import React from "react";
import "./search.css"

const baseURL = "https://rugged-yosemite-26165.herokuapp.com/search/";

function Search() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="centerem">
    <div>
    <h1>LdexMovies</h1> 
    <h5>Find Movies, TV shows and more</h5>  
    </div>  
    <div className="imageone">
    <input type="text" id="Search" name="Search"/>
    <button>Search</button>
    </div>
    <div class="result">  
      <div>    
        <h1>{post.page[0]}</h1>
      </div>
    
    </div>
   </div>
  );
}
export default Search