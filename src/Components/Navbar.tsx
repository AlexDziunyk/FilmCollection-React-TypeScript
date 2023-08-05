import {useState} from 'react';

import '../styles/Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

function Navbar() {

  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className='navbar__container'>
        <Link className='navbar__logo' to="/FilmCollection-React-TypeScript">IMGB</Link>
          <ul className='navbar__sections'>
              <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/FilmCollection-React-TypeScript/popular">Popular</NavLink>
              <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/FilmCollection-React-TypeScript/top_rated">Top Rated</NavLink>
              <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/FilmCollection-React-TypeScript/upcoming">Upcoming</NavLink>
          </ul>
          <div className="navbar__burger" onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? 
            <>
              <RxCross1 size={25} />
              <ul className='navbar__menu'>
                <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/FilmCollection-React-TypeScript/popular">Popular</NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/FilmCollection-React-TypeScript/top_rated">Top Rated</NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/FilmCollection-React-TypeScript/upcoming">Upcoming</NavLink>
              </ul>
            </>
            : 
            <GiHamburgerMenu  size={25}/>
            }
          </div>
      </div>
    </nav>
  )
}

export default  Navbar;

