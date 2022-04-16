export const fetchFilms = async () => {
  const res = await fetch('https://swapi.dev/api/films')
  const data = await res.json()

  // console.log(data)
  return data.results
}

export const fetchCharacters = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
  const data = await res.json()

  // console.log(data)
  return data.results
}

export const fetchSpecies = async (page) => {
  const res = await fetch(`https://swapi.dev/api/species/?page=${page}`)
  const data = await res.json()

  // console.log(data)
  return data.results
}