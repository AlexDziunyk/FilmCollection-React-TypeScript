import icon from '../assets/icon.png';
import avatar from '../assets/avatar.png';
import '../styles/Navbar.css';

interface INavbarProps {
  handleChange: (text: string) => void;
  search: string;
}


export default function Navbar({handleChange, search}: INavbarProps) {
  return (
    <nav>
        <div className='nav__logoBlock'>
            <img className='nav__logo' src={icon} alt='logo'></img>
            <p className='nav__title'>Movies</p>
        </div>
        <input value={search} onChange={(e) => handleChange(e.target.value)} type='text' className='nav__search' placeholder='Search'></input>
        <button className='nav__button'><img src={avatar} alt='avatar'></img></button>
    </nav>
  )
}
