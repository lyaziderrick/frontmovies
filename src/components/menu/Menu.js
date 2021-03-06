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
        <NavLink to="/Movies" activeStyle>
          Movies
        </NavLink>
        <NavLink to="/Shows" activeStyle>
          TV show
        </NavLink>
    </NavMenu>
    <NavBtn>
      <NavBtnLink to="/signin">Buy Site</NavBtnLink>
    </NavBtn>
   </Nav>
   </>
    )
}
export default Menu