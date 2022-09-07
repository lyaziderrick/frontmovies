import React from "react";
import Video from "./search/video";
import Comingsoon from "./comingsoon/comingsoon";
import Newmovies from "./search/Newmovies";
import Footer from "./footer/footer";
import Banner from "../components/adsense/adsense";
import { Adsense } from "@ctrl/react-adsense";
const Home =() =>{
    return(
      <div className="papa">  
        <Newmovies/>
        <Adsense/> 
        <Comingsoon/> 
        <Footer/>
      </div>
    )
}
export default Home