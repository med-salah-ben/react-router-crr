import React, { useState} from 'react';
import { Routes,Route } from 'react-router-dom';

import MoviesList from './components/MoviesList';
import Search from './components/Search';
import { moviesData } from './Data';
import "./App.css"
import AddMovie from './components/AddMovie';
import Home from './components/Home';
import Trailer from './components/Trailer';

const App = () => {
  const [movies,setMovies]= useState(moviesData);
  const [ratingSearch,setRatingSearch]= useState(0);
  const [searchTitle,setSearchTitle]=useState("");

  

  const handleMovie = (movie)=>{
    console.log(movie)
    setMovies([...movies,movie])
    console.log(movie)
  }

  return (
    <div>
     
      <Search  setRatingSearch={setRatingSearch} setSearchTitle={setSearchTitle} />
      <AddMovie handleMovie={handleMovie} />
      <Routes>
       <Route path='/' element={ <Home />} />
      <Route path='/movieList' element={<MoviesList ratingSearch={ratingSearch} searchTitle={searchTitle}  movies={movies} />}/>
      <Route path="/trailer/:id" element={<Trailer movies={movies} />}/>
      </Routes>
    </div>
  )
}

export default App