import { useEffect } from 'react';
import SearchIcon from '../search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, setSearchTitle, getSearchTitle } from '../features/movieSlice';

const Search = () => {
    const dispatch = useDispatch();
    const searchTitle = useSelector(getSearchTitle);

    useEffect(() => {
        dispatch(searchMovies());
    }, []);

    return (
        <div className='search'>
            <input
                placeholder='Search for Movies'
                value={searchTitle}
                onChange={(e) => dispatch(setSearchTitle(e.target.value))} />
            <img
                src={SearchIcon}
                alt='search'
                onClick={() => dispatch(searchMovies())} />
        </div>
    )
}

export default Search