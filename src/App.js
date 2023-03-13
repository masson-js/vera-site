
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Food } from "./pages/Food"
import { LifeStile } from "./pages/LifeStile"
import { Cosmetics } from "./pages/Cosmetics";
import { About } from "./pages/About";



function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/food" element={<Food/>} />
    <Route path="/portraits" element={<LifeStile/>} />
    <Route path="/cosmetics" element={<Cosmetics/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  </>
  )
}

export default App;
