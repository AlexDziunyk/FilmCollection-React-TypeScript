import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAppDispatch } from '../hooks/reduxHooks';
import { addFavoriteFilm, removeFavoriteFilm } from '../redux/favoriteFilmsSlice';

import '../styles/Film.css';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

export interface IFilmProps {
    id: string;
    poster: string;
    title: string;
    rating: number;
    isFav?: boolean;
}

function Film({id, title, poster, rating, isFav}: IFilmProps) {

    const [isLiked, setIsLiked] = useState<boolean>(isFav || false);
    const dispatch = useAppDispatch();

    const handleAddFilm = (film: IFilmProps) => {
        setIsLiked(!isLiked)
        if(!isLiked) {
            dispatch(addFavoriteFilm(film));
        } else {
            dispatch(removeFavoriteFilm(film));
        }
    }

    return (
        <div className='film__container'>
            
            <img className='film__image' src={`https://image.tmdb.org/t/p/original/${poster}`} alt='img'></img>
            
            <div className='film__info'>
                <div className='film__rating'>
                    <AiFillStar color={'#f5c518'}/>
                    <p>{rating?.toFixed(1)}</p>
                </div>
                <p className='film__title'>{title}</p>
                <div className='film__like' onClick={() => handleAddFilm({id ,title, poster, rating})}>
                    {isLiked ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
                </div>
            </div>
        </div>
    )
}


export default Film;