import axios from "axios";
import React ,{useState} from "react";
import Newmovies from "./Newmovies";
import "./search.css"
import Video from './video';







const Search = (props) => {
  const[value, setValue] = useState(""); 
  var CurrentYear = new Date().getFullYear()
  const[yvalue, ysetValue] = useState(""); 
  const [post, setPost] = React.useState(null);
  const [showText, setShowText] = useState(false); 
  const baseURL = "http://www.omdbapi.com/?t= "+value.replace(/ /g,"+")+"&y="+ yvalue +"+&apikey=583d761d";
  const baseURLx = "http://www.omdbapi.com/?t= "+props.messagex+"&y="+ CurrentYear + " +&apikey=583d761d";  
  
  const url="https://2embed.org/embed/";
  const home = () => { 
    if([props.messagex]  !== ""){ 
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
  if (!post) return "hello";
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
    <Video message={url + post.imdbID}/>
    </div>

   </div>
   
  );
}
export default Search


