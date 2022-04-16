import { createContext, useState } from "react";

const FilmContext = createContext()

export function FilmProvider({ children }) {
  const [films, setFilms] = useState([])

  return (
    <FilmContext.Provider value={{ films, setFilms }}>
      { children }
    </FilmContext.Provider>
  )
}

export default FilmContext