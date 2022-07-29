import React from "react"
import "./footer.css"
import PAP from "./logo.png"
function Footer(){
    return(
      <div className="footone">
        <div className="one">
        <img src={PAP} alt="img"/>
        </div>
       <div className="one">
       <h9>LdexMovies is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series.
         You can also Download full movies from LdexMovies and watch it later if you want </h9>
       </div>
       <div className="one">
       <button>Contact Us</button>  
       </div>
      </div>
    )
}
export default Footer