import { useParams } from 'react-router-dom';
import {IFilmProps} from '../Components/Film';
import {useEffect, useState} from 'react';

import '../styles/FilmPage.css';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
    }
  };

function FilmPage() {
    const {filmId} = useParams();
    const [data, setData] = useState<IFilmProps>();

    const getFilmById = async () => {
        const responseTMDB = await fetch(`https://api.themoviedb.org/3/movie/${filmId}/external_ids`, options);
        const jsonTMDB = await responseTMDB.json();
        const imdb_id = jsonTMDB.imdb_id;
        const responseIMDB = await fetch(`https://api.themoviedb.org/3/find/${imdb_id}?external_source=imdb_id`, options);
        const jsonIMDB = await responseIMDB.json()
        if(jsonIMDB?.movie_results.length > 0) {
            setData(jsonIMDB?.movie_results[0]);
        } else {
            setData(jsonIMDB?.tv_results[0]);
        }
    }

    useEffect(() => {
        getFilmById();
    }, [])

    return (
        <div className="filmpage__container">{data?.title}</div>
    )
}


export default FilmPage;
