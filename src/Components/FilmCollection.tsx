import {useState, useEffect} from 'react';
import left from '../assets/arrowLeft.png';
import right from '../assets/arrowRight.png';

import Film from './Film';
import '../styles/FilmCollection.css'

interface IFilmColProps {
  search: string;
}

interface IMovie {
  id: string;
  originalTitleText: {
    text: string;
  };
  primaryImage: {
    url: string;
  };
  _id: string;
}


export default function FilmCollection({search}: IFilmColProps) {

  const [data, setData] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    setIsLoading(true);
    const query = 'https://moviesdatabase.p.rapidapi.com/titles/';
    const url = search ? `${query}search/keyword/${search}` : `${query}x/upcoming`;
    const options = {
      method: 'GET',
      headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_COLLECTION_KEY,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, [search]);

  const [width, setWidth] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  

  const handleClickLeft = (): void => {
    if(width > 254) {
      setWidth(prev => prev - 286);
    } else if(width === 254) {
      setWidth(0);
    }
  }

  const handleClickRight = (): void => {
    if(width >= 254 && width < max) {
      setWidth(prev => prev + 286);
    } else if(width < 254 && width < max) {
      setWidth(prev => prev + 254);
    }
  }

  useEffect(() => {
    setMax((data.length - 1) * 254);
    setWidth(0);
  }, [data])

  return (
    <div className='collection'>
      <button onClick={handleClickLeft} className='collection__left'><img src={left} alt='left'></img></button>
      <div className='collection__wrapper'>
        <div className='collection__buttons'>
          <button onClick={handleClickLeft} className='collection__left small'><img src={left} alt='left'></img></button>
          <button onClick={handleClickRight} className='collection__right small'><img src={right} alt='right'></img></button>
        </div>
        <div style={{right: width}} className='collection__films'>
          {(data.length > 0) && data.map((item) => {
            return <Film key={item.id} title={item.originalTitleText.text} img={item.primaryImage?.url}/>
          })}
          {isLoading && <p className='collection__status'>Loading...</p>}
          {(!isLoading && data.length === 0 && search.length > 0) && <p className='collection__status'>Not found!</p>}
        </div>
      </div>
      <button onClick={handleClickRight} className='collection__right'><img src={right} alt='right'></img></button>
    </div>
  )
}
