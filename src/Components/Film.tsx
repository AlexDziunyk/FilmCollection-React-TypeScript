import {useState} from 'react';

import '../styles/Film.css';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

interface IFilmProps {
    backdrop_path?: string;
    id?: string;
    overview?: string;
    poster?: string;
    release_date?: string;
    title?: string;
    rating?: number;
    
}

function Film({title, poster, rating}: IFilmProps) {

    const [isLiked, setIsLiked] = useState<boolean>(false);
    
    return (
        <div className='film__container'>
            <img className='film__image' src={`http://image.tmdb.org/t/p/original/${poster}`} alt='img'></img>
            <div className='film__info'>
                <div className='film__rating'>
                    <AiFillStar color={'#f5c518'}/>
                    <p>{rating?.toFixed(1)}</p>
                </div>
                <p className='film__title'>{title}</p>
                <div className='film__like' onClick={() => setIsLiked(!isLiked)}>
                    {isLiked ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
                </div>
            </div>
        </div>
    )
}


export default Film;