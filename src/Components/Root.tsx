import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import FilmCarousel from './FilmCarousel';

function Root() {

    

    return (
        <div>
            <Navbar />
            <FilmCarousel />
            <main>
                <Outlet />
            </main>
        </div>
    )
}


export default Root;