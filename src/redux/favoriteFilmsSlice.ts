import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store';

export interface FavoriteFilm {
    id: string;
    poster: string;
    title: string;
    rating: number;
}

const initialState: FavoriteFilm[] = [];

export const favoriteFilmsSlice = createSlice({
    name: 'favoriteFilms',
    initialState,
    reducers: {
        addFavoriteFilm: (state: FavoriteFilm[], action: PayloadAction<FavoriteFilm>) => {
            let isRepeat = false;
            state.forEach(item => {
                if(item.id === action.payload.id) {
                    isRepeat = true;
                }
            })
           if(!isRepeat) {
            state.push(action.payload);
           }
        },
        removeFavoriteFilm: (state: FavoriteFilm[], action: PayloadAction<FavoriteFilm>) => {
            return state.filter(film => film.id !== action.payload.id)
        }
    }
});

export const {addFavoriteFilm, removeFavoriteFilm} = favoriteFilmsSlice.actions;
export const selectFavoriteFilms = (state: RootState) => state.favoriteFilms;
export default favoriteFilmsSlice.reducer;

