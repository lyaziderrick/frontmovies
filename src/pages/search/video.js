import react from "react"
import {dero} from "./search"
import "./video.css"
import Adsense from "../../components/adsense/adsense"
const Video = (props) => {
return(
    
<div className="displaypan">  
<iframe id="ve-iframe" src={props.message}
scrolling="no"  allowfullscreen="allowfullscreen" frameborder="0">    
</iframe>
<Adsense/>
</div>
)
}
export default Video