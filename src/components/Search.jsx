import React from 'react';
import { Link } from 'react-router-dom';
import StarsRating from 'stars-rating';
import { Navbar,Nav,Container,Form } from 'react-bootstrap';

const Search = ({setRatingSearch,setSearchTitle}) => {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Link to="/"><Navbar.Brand >Navbar</Navbar.Brand></Link>
    <Nav className="me-auto">
    <Link to="/"><Navbar.Brand >Home</Navbar.Brand></Link>
    <Link to="/movieList"><Navbar.Brand >Movies</Navbar.Brand></Link>
   
    </Nav>
    <Form.Control className='inp' type="text" placeholder="Search movies..." 
    onChange={(e)=>setSearchTitle(e.target.value)} />
    <StarsRating
  count={5}
  onChange={(newValue)=>{
      setRatingSearch(newValue)
  }}
  size={24}
  color2={'#ffd700'} />
    </Container>
  </Navbar>
    </div>
  )
}

export default Search