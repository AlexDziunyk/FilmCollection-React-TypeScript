import './App.css'
import FilmCollection from './Components/FilmCollection';
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root />} errorElement={ <ErrorPage /> }>
    <Route path="/" element={ <FilmCollection title="On The Air" query="on_the_air" showType="tv" /> } />
    <Route path="popular" element={ <FilmCollection title="Popular" query="popular" /> } />
    <Route path="top_rated" element={ <FilmCollection title="Top Rated"  query="top_rated" /> } />
    <Route path="upcoming" element={ <FilmCollection title="Upcoming"  query="upcoming" /> } />
  </Route>
))

function App() {
  
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
