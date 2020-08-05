import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { moviesData} from "./components/data"
import MovieList from "./components/movieList"


function App() {
  const [movies, setMovies] = useState(moviesData)
  return (
   <div>
     <MovieList movies={movies} />
     <img   src=""/>
    </div>
  );
}

export default App;
