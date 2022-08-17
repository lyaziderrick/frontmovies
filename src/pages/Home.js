import React from "react";
import Video from "./search/video";
import Comingsoon from "./comingsoon/comingsoon";
import Newmovies from "./search/Newmovies";
import Footer from "./footer/footer";
import Adsense from "../components/adsense/adsense";
const Home =() =>{
    return(
      <div className="papa">   
        <Newmovies/>
        <Adsense slot="7730047444"/>
        <Comingsoon/>
        <Footer/>
      </div>
    )
}
export default Home