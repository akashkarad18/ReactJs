import {Route,Routes} from "react-router-dom"
import Home from "./MyComponents/Home"
import About from "./MyComponents/About"
import Contact from "./MyComponents/Contact"
import MyNav from "./MyComponents/MyNav"
function App() {
  

  return (
    <>
    <MyNav></MyNav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contactpage" element={<Contact/>}></Route>
        <Route path="/aboutpage" element={<About/>}></Route>
      </Routes>
       
    </>
  )
}

export default App
