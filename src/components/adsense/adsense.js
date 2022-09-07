import React, { useEffect, useRef } from 'react'
import "./adsense.css"
export default function Adsense(){
const banner = useRef<HTMLDivElement>(null)
const atOptions = {
        key: '0e9ed3eef5346b35f6749a32bb5a8340',
        format: 'iframe',
        height: 50,
        width: 520,
        params: {},
}
    useEffect(() => {
        if (banner.current.Child) {
        const conf = document.createElement('script')
        const script = document.createElement('script')    
        script.type = 'text/javascript'
        script.src = `//pl17662934.profitablegatetocontent.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`
        if (banner.current) {
            banner.current.append(conf)
            banner.current.append(script)
        } 
    }
}, [])
return <div ref={banner}></div>
    
}