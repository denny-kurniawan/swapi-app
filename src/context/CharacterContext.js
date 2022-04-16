import { createContext, useState } from "react";

const CharacterContext = createContext()

export function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  return (
    <CharacterContext.Provider value={{ characters, setCharacters, page, setPage }}>
      { children }
    </CharacterContext.Provider>
  )
}

export default CharacterContext