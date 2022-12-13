import starIcon from '../star.svg';
const IMAGE_URL = 'https://image.tmdb.org/t/p';

const IMAGES_SIZES = {
    small: `${IMAGE_URL}/w185/`,
    medium: `${IMAGE_URL}/w342/`,
    large: `${IMAGE_URL}/w500/`,
    extraLarge: `${IMAGE_URL}/original/`,
}

const MovieCard = ({ movie }) => {
    let { release_date, poster_path, title, original_title, vote_average } = movie;
    return (
        <div className='movie'>
            <div>
                <p>{release_date}</p>
            </div>
            <div>
                <img src={poster_path ? IMAGES_SIZES.medium + poster_path : 'https://via.placeholder.com/400' } alt={title} />
            </div>
            <div>
                <span>{vote_average} <img src={starIcon} alt="star"/></span>
                <h3>{original_title}</h3>
            </div>
        </div>
    )
}

export default MovieCard