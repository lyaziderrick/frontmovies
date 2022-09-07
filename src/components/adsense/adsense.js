import React, { useEffect, useRef } from 'react'
import "./adsense.css"
export default function Adzterra(){
const banner = useRef<HTMLDivElement>(null)
const atOptions = {
        key: '9091cd7be08106d4a0509ea9a0b163cb',
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
return <div>
    {banner}
    <div id="container-9091cd7be08106d4a0509ea9a0b163cb"></div>
    </div>
    
}