import { createContext, useState } from "react";

const SpeciesContext = createContext()

export function SpeciesProvider({ children }) {
  const [species, setSpecies] = useState([])
  const [page, setPage] = useState(1)

  return (
    <SpeciesContext.Provider value={{ species, setSpecies, page, setPage }}>
      { children }
    </SpeciesContext.Provider>
  )
}

export default SpeciesContext