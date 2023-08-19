import { useAppSelector } from '../hooks/reduxHooks';
import Film from '../Components/Film';

import '../styles/FavoriteFilms.css';

function FavoriteFilms() {

    const favoriteFilms = useAppSelector(state => state.favoriteFilms);
   

    return (
        <div className='fav__collection'>
            <h1 className='fav__title'>Favorite</h1>
            <div className='fav__container'>
                {favoriteFilms.length > 0 ? favoriteFilms.map(({id, poster, title, rating}) => {
                    return <Film key={id} id={id} poster={poster} title={title} rating={rating} isFav={true}/>
                }) : <h2 style={{color: 'white'}}>You don't have favorite  films</h2>}
            </div>
        </div>
    )
}

export default FavoriteFilms;
