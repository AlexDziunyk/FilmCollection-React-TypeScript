import Film from '../Components/Film';
import FilmSkeleton from '../Components/FilmSkeleton';
import '../styles/FilmCollection.css';
import {useState, useEffect} from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
    }
};

interface IFilmAPI {
    backdrop_path?: string;
    id?: string;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    title?: string;
    name?: string;
    vote_average?: number;
}

interface IFilmProps {
    title?: string;
    query?: string;
    showType?: string;
}

function FilmCollection({title, query, showType}: IFilmProps) {

    const [data, setData] = useState<IFilmAPI[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getFilms = async () => {
        setIsLoading(true);
        const url = `https://api.themoviedb.org/3/${showType ? showType : 'movie'}/${query}?language=en-US&page=1`;
        try {
            const response = await fetch(url, options);
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getFilms();
    }, [query])

  return (
    <div className='collection'>
        <h1 className='collection__title'>{title}</h1>
        <div className='colection__container'>
            {isLoading ? 
                <FilmSkeleton cards={20}/>
                : 
                data.map(({id, title, name, poster_path, vote_average}) => {
                    return <Film key={id} title={title || name} poster={poster_path} rating={vote_average}/>
                })
            }
        </div>
    </div>
  )
}


export default FilmCollection;
