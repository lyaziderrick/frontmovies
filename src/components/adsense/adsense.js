import React, { Component  } from 'react'
class Adsense extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
                <ins className='adsbygoogle'
                    style={{ display: 'block' }}
                    data-ad-client= 'ca-pub-5325051597778065'
                    data-ad-format= 'auto'
                    data-full-width-responsive="true"
                >
                </ins>
        );
    }
}
export default Adsense