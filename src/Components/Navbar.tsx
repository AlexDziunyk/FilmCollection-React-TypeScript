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
        <Link className='navbar__logo' to="/">IMGB</Link>
          <ul className='navbar__sections'>
              <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/popular">Popular</NavLink>
              <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/top_rated">Top Rated</NavLink>
              <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/upcoming">Upcoming</NavLink>
              <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/favorite">Favorite</NavLink>
          </ul>
          <div className="navbar__burger" onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? 
            <>
              <RxCross1 size={25} />
              <ul className='navbar__menu'>
                <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/popular">Popular</NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/top_rated">Top Rated</NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/upcoming">Upcoming</NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink active-link" : 'navlink'} to="/favorite">Favorite</NavLink>
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

