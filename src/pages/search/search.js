import axios from "axios";
import React ,{useState} from "react";
import Newmovies from "./Newmovies";
import "./search.css"
import Video from './video';







const Search = (props) => {
  
  const[value, setValue] = useState(""); 
  var CurrentYear = new Date().getFullYear()
  const[yvalue, ysetValue] = useState(""); 
  const [post, setPost] = React.useState("security");
  const [showText, setShowText] = useState(false);
  const baseURL = "https://www.omdbapi.com/?t= "+value.replace(/ /g,"+")+"&y="+ yvalue +"+&apikey=583d761d";
  const baseURLx = "http://www.omdbapi.com/?t= "+props.messagex+"&y="+ CurrentYear + " +&apikey=583d761d";  
  const url="https://2embed.org/embed/";
  const home = () => {  
    if(props.messagex  !== ""){ 
      axios.get(baseURLx).then((response) => {
        setPost(response.data);
      });
  } 
      if(value  !== ""){ 
        axios.get(baseURL).then((response) => {
            setPost(response.data);
          }); 

        }
      
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
    <div className="imageone">
    <input value={value} onChange={(e) => {setValue(e.target.value)}} placeholder="movie"/>
    <input value={yvalue} onChange={(e) => {ysetValue(e.target.value)}} placeholder="year"/>
    <button type="submit" className="btn" onClick={home}>Search</button>  
    </div>
    <div><h1>{props.messagex}</h1></div>
    <div><h5>Click Search Button</h5></div>

    <div class="result">  
      <div class="see">   
     <img src ={post.Poster} alt="N/I" onClick={() => setShowText(!showText)} />
     
        </div>
        <div>
        <h5>{post.Plot}</h5>
       </div>
       <div>
        <h6>Realise:{post.Year}</h6>
        <h6>Genre:{post.Genre} </h6>
        <h6>Country:{post.Country}</h6>
        <h6>Runtime:{post.Runtime} </h6>
        
       </div>  
    </div>
    <div class="displayten"> 
    <Video message={url + post.imdbID}/>   
    </div>

   </div>
   
  );
}
export default Search


