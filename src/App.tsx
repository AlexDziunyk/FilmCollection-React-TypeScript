import FilmCollection from './pages/FilmCollection';
import Root from './Components/Root';
import ErrorPage from './pages/ErrorPage';
import FilmPage from './pages/FilmPage';
import FavoriteFilms from './pages/FavoriteFilms';
import MainCollection from './pages/MainCollection';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={ <Root />} errorElement={ <ErrorPage /> }>
      <Route index element={ <MainCollection title="Now Playing" query="now_playing" /> } />
      <Route path="/popular" element={ <FilmCollection title="Popular" query="popular" showType='movie' /> } />
      <Route path="/top_rated" element={ <FilmCollection title="Top Rated"  query="top_rated" showType='movie' /> } />
      <Route path="/upcoming" element={ <FilmCollection title="Upcoming"  query="upcoming" showType='movie' /> } />
      <Route path="/favorite" element={ <FavoriteFilms /> } />
    </Route>


    <Route path="/films/:filmId" element={<FilmPage />} />
  </>
));

function App() {


  return (

    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
