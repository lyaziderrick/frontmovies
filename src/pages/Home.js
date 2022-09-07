import React from "react";
import Video from "./search/video";
import Comingsoon from "./comingsoon/comingsoon";
import Newmovies from "./search/Newmovies";
import Footer from "./footer/footer";
import Banner from "../components/adsense/adsense";
import Adzterra from "../components/adsense/adsense";
const Home =() =>{
    return(
      <div className="papa">  
        <Newmovies/>
        <Adzterra/> 
        <Comingsoon/> 
        <Footer/>
      </div>
    )
}
export default Home