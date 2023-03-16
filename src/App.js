
import { Route, Routes } from "react-router-dom"
import { React, useEffect, useState } from 'react'
import { Home } from "./pages/Home"
import { Food } from "./pages/Food"
import { LifeStile } from "./pages/LifeStile"
import { Cosmetics } from "./pages/Cosmetics";
import { About } from "./pages/About";
import BeatLoader from "react-spinners/BeatLoader";



function App() {
 

  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.addEventListener("load", () => {
    setLoading(false);
    });

  }, [])

  return (
    <>

    { loading ? (<BeatLoader
      color={"#FCCBA0"}
      loading={loading}
      size={30}
      />) : (

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/food" element={<Food/>} />
    <Route path="/portraits" element={<LifeStile/>} />
    <Route path="/cosmetics" element={<Cosmetics/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  )}
  </>
  )
}

export default App;
