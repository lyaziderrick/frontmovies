import axios from "axios";
import React ,{useState} from "react";
import "./search.css"





function Search() {

  const[value, setValue] = useState(""); 
  const [post, setPost] = React.useState(null);
  const [showText, setShowText] = useState(false);
  
  const baseURL = "http://www.omdbapi.com/?t= "+value.replace(/ /g,"+")+"+&apikey=583d761d";
  const url="https://fmovies.co/film/best-years-gone-1630853679?play=1/";
  const home = () => {  
    axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
  }
  React.useEffect(() => {
   home()
  }, []);
  if (!post) return null;

  return (
    <div className="centerem">
    <div>
    <h1>LdexMovies</h1> 
    <h5>Find Movies, TV shows and more</h5>  
    </div>  
    </div>
   
  );
}
export default Search