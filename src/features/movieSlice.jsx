import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as httpRequest from '../utils/httpRequest';
import { API_KEY } from "../utils/constants";

export const searchMovies = createAsyncThunk('movies/search', async (_, thunkAPI) => {
    const { movie } = thunkAPI.getState();
    let uri = movie.searchTitle ? '/search/movie' : '/movie/popular';
    const response = await httpRequest.get(`${uri}?`, {
        params: {
            page: movie.pagination.pageNumber,
            query: movie.searchTitle,
            api_key: API_KEY
        }
    });
    return response;
})

const initialState = {
    movies: [],
    pagination: {
        pageNumber: 1,
        totalPage: 1,
    },
    searchTitle: '',
    isLoading: false
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setSearchTitle: (state, { payload }) => {
            state.searchTitle = payload;
        },
        setPageNumber: (state, { payload }) => {
            state.pagination.pageNumber = payload;
        }
    },
    extraReducers: {
        [searchMovies.pending]: (state) => {
            state.isLoading = true;
        },
        [searchMovies.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.movies = payload.results;
            state.pagination = {
                pageNumber : payload.page,
                totalPage: payload.total_pages
            }
        },
        [searchMovies.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export const { setSearchTitle, setPageNumber } = movieSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export const getSearchTitle = (state) => state.movie.searchTitle;
export const getPagination = (state) => state.movie.pagination;
export default movieSlice.reducer;