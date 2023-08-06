import { Carousel } from 'react-responsive-carousel';
import {useState, useEffect} from 'react';
import { AiFillStar } from 'react-icons/ai';
import CarouselSkeleton from './CarouselSkeleton';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/FilmCarousel.css';


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

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
  }
};



function FilmCarousel() {

  
  const [data, setData] = useState<IFilmAPI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTrendingFilms = async () => {
    setIsLoading(true);
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
    getTrendingFilms();
  }, [])

  return (
    <>
      {isLoading ? <CarouselSkeleton />
      :
      <Carousel infiniteLoop={true} showIndicators={false} autoPlay={true} showStatus={false} showThumbs={false}>
          {data.map(({id, backdrop_path, title, vote_average, overview, name}) => {
            return (
              <div key={id} className='carousel__container'>
                <div className='carousel__image'>
                  <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt='img'></img>
                </div>
                <div className='carousel__info'>
                  <h1 className='carousel__title'>{title || name}</h1>
                  <div className='carousel__details'>
                    <AiFillStar size={45} color={'#f5c518'}/>
                    <p className='carousel__score'>{vote_average?.toFixed(1)}</p>
                  </div>
                  <div className='carousel__overview'>{overview}</div>
                </div>
              </div>
            )
          })}
      </Carousel>
      }
    </>
  )
}

export default FilmCarousel;

