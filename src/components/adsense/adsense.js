import React, { Component  } from 'react'

class Adsense extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"728px",height:"90px"} }
                data-ad-client = "ca-pub-5325051597778065"
                data-ad-slot = "7730047444"></ins>
        </div>)
    }
}

export default Adsense