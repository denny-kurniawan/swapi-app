import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import CharacterContext from '../context/CharacterContext'
import { fetchCharacters } from '../api/fetchData'
import CharacterCard from '../components/CharacterCard'
import Page from '../components/Page'
import Footer from '../components/Footer'

const Character = () => {
  const { characters, setCharacters, page, setPage } = useContext(CharacterContext)

  useEffect(() => {
    const getCharacter = async () => {
      const res = await fetchCharacters(page)
      setCharacters(res)
    }

    getCharacter()
    // eslint-disable-next-line
  }, [page])

  return (
    <>
      <Header />
      <Container className="d-flex flex-wrap justify-content-center my-5">
        <CharacterCard />
        <Page data={characters} page={page} setPage={setPage} />
      </Container>
      <Footer />
    </>
  )
}

export default Character