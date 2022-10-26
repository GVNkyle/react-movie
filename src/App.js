import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9a5f6f8e54a84fb4f6444d2a4b8a4a84';
const App = () => {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        let uri = title ? '/search/movie' : '/movie/popular'
        const response = await fetch(`${API_URL}${uri}?query=${title}&api_key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
    }
    useEffect(() => {
        searchMovies('Batman');
    }, [])

    return (
        <div className='app'>
            <h1>Movies Review</h1>

            <div className='search'>
                <input
                    placeholder='Search for Movies'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(search)} />
            </div>
            {movies.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movie found</h2>
                </div>
            )}
        </div>
    );
}

export default App