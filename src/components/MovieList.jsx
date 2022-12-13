import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from 'react-redux';
import { MagnifyingGlass } from 'react-loader-spinner';
import { getAllMovies, getPagination, searchMovies, setPageNumber } from '../features/movieSlice';
import Search from "./Search";
import { Pagination } from "./Pagination";

const MovieList = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.movie)
    const movies = useSelector(getAllMovies);
    const pagination = useSelector(getPagination);

    return (
        <>
            <h1>Movies Review</h1>
            <Search />
            {
                isLoading ? (<MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='#e15b64'
                />) : (
                    movies.length > 0 ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movie found</h2>
                        </div>
                    )
                )
            }
            <Pagination
                totalPages={pagination.totalPage}
                currentPage={pagination.pageNumber}
                onChange={page => {
                    dispatch(setPageNumber(page))
                    dispatch(searchMovies())
                }}
            />
        </>
    );
}

export default MovieList