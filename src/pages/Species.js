import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import SpeciesContext from '../context/SpeciesContext'
import { fetchSpecies } from '../api/fetchData'
import SpeciesCard from '../components/SpeciesCard'
import Page from '../components/Page'
import Footer from '../components/Footer'

const Species = () => {
  const { species, setSpecies, page, setPage } = useContext(SpeciesContext)

  useEffect(() => {
    const getSpecies = async () => {
      const res = await fetchSpecies(page)
      setSpecies(res)
    }

    getSpecies()
    // eslint-disable-next-line
  }, [page])

  return (
    <>
      <Header />
      <Container className="d-flex flex-wrap justify-content-center my-5">
        <SpeciesCard />
        <Page data={species} page={page} setPage={setPage} />
      </Container>
      <Footer />
    </>
  )
}

export default Species