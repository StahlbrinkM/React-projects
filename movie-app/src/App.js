import { useEffect, useState } from "react"
import './App.css';
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

// 98c14962

const API_URL = "http://www.omdbapi.com?apikey=98c14962"


function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    searchMovies("Superman")
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  return (
    <div className="App center">
      <h1>Movies</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => {searchMovies(searchTerm)}}
        />
      </div>


      
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
