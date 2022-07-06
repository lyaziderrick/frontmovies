import React from "react"
import Menu from "./components/menu/Menu"
import "./App.css"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Shows from "./pages/shows"
import "./App.css"

function App(){
  return(
<Router>
  <Menu/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route exact path="/Movies" element={<Movies/>}/>
  <Route exact path="/Shows" element={<Shows />} />
  </Routes>
</Router>
)
}
export default App