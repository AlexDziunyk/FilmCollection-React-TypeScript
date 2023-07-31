import './App.css'
import Navbar from './Components/Navbar';
import FilmCollection from './Components/FilmCollection';
import {useState} from 'react';

function App() {
  
  const [search, setSearch] = useState<string>('');
  const handleChange = (text: string) => {
    setSearch(text);
  }

  return (
    <div className='app' >
      <div className='container'>
        <Navbar search={search} handleChange={handleChange}/>
        <h1 className='app__title'>{search ? `Search: ${search}` : 'Top Films'}</h1>
        <FilmCollection search={search}/>
      </div> 
    </div>
  )
}

export default App
