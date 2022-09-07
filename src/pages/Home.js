import React from "react";
import Video from "./search/video";
import Comingsoon from "./comingsoon/comingsoon";
import Newmovies from "./search/Newmovies";
import Footer from "./footer/footer";
import GetAll from "../components/adsense/get";
const Home =() =>{
    return(
      <div className="papa">  
        <Newmovies/>
        <GetAll/>
        <Comingsoon/> 
        <Footer/>
      </div>
    )
}
export default Home