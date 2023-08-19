import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Root() {

    

    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}


export default Root;