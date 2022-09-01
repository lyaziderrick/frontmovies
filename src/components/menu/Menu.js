import React from "react"
import {Nav,NavLink,Bars ,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"
import ME from "./logo.png"
function Menu(){
    return(
   <>
   <Nav>
    <NavLink to="/">
  <img src={ME} alt="logo"/>
    </NavLink>
    <Bars/>
    <NavMenu>
       
    </NavMenu>
    <NavBtn>
    
    </NavBtn>
   </Nav>
   </>
    )
}
export default Menu