import { Routes, Route } from 'react-router-dom';
import './App.scss';
import MovieList from './components/MovieList';

const App = () => {

    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<MovieList/>}/>
            </Routes>
        </div>
    );
}

export default App