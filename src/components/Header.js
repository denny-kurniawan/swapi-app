import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink className='text-decoration-none mx-auto text-light display-6' to='/'>
            Star Wars API
        </NavLink>
      </Container>
    </Navbar>
  )
}

export default Header