import axios from "axios";
import React ,{useState} from "react";
import "./search.css"





function Search() {

  const[value, setValue] = useState(""); 
  const [post, setPost] = React.useState(null);
  const [showText, setShowText] = useState(false);
  
  const baseURL = " "+value.replace(/ /g,"+")+"+&apikey=583d761d";
  const url="";
  const home = () => {  
    axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
  }
  React.useEffect(() => {
   home()
  }, []);
  

  return (
    <div className="centerem">
    <div>
    <h1>LdexMovies</h1> 
    <h5>Find Movies, TV shows and more</h5>  
    </div>  
    <div className="imageone">
    <input value={value} onChange={(e) => {setValue(e.target.value)}} />
    <button type="submit" className="btn" onClick={home}>Search</button>  
    </div>
    <div><h1>{value}</h1></div>
    <div class="result">  
      <div class="see">  
        
     <img src ={post.Poster} alt="N/A" onClick={() => setShowText(!showText)} />
     
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
    {showText &&  <iframe id="ve-iframe" src={url} 
      scrolling="no"  allowfullscreen="allowfullscreen" frameborder="0"></iframe>}
       </div>
   </div>
   
  );
}
export default Search