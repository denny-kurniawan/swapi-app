import { Routes, Route } from "react-router-dom"
import Film from "../pages/Film"
import Character from "../pages/Character"
import Home from "../pages/Home"
import Species from "../pages/Species"

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/film/' element={<Film />} />
        <Route path='/character/' element={<Character />} />
        <Route path='/species/' element={<Species />} />
      </Routes>
    </>
  )
}

export default Router