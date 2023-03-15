
import { Route, Routes } from "react-router-dom"
import { React, useEffect, useState } from 'react'
import { Home } from "./pages/Home"
import { Food } from "./pages/Food"
import { LifeStile } from "./pages/LifeStile"
import { Cosmetics } from "./pages/Cosmetics";
import { About } from "./pages/About";
import PuffLoader from "react-spinners/PuffLoader";



function App() {
 

  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="app">

    { loading ? (<PuffLoader
      color={"#AB7F42"}
      loading={loading}
      size={150}
      />) : (

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/food" element={<Food/>} />
    <Route path="/portraits" element={<LifeStile/>} />
    <Route path="/cosmetics" element={<Cosmetics/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  )}
  </div>
  )
}

export default App;
