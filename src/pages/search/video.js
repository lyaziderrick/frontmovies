import react from "react"
import {dero} from "./search"
import "./video.css"
import {Adsense} from '@ctrl/react-adsense';
const Video = (props) => {
return(
    
<div className="displaypan">  
<iframe id="ve-iframe" src={props.message}
scrolling="no"  allowfullscreen="allowfullscreen" frameborder="0">    
</iframe>
<Adsense
  client="ca-pub-5325051597778065"
  slot="7730047444"
  style={{ width: 500, height: 300 }}
  format=""
/>
</div>
)
}
export default Video