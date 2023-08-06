import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';
import '../styles/ErrorPage.css';



function ErrorPage() {
    const error = useRouteError();
    
    if(isRouteErrorResponse(error)) {
        return (
            <div className='error__container'>
                <h1 className='error__oops'>Oops!</h1>
                <p className='error__message'>Sorry, an unexpected error has occured.</p>
                <p className='error__code'>
                    <i>{error.status}</i>
                </p>
                <Link to='/' className='error__button'>Return Home</Link>
            </div>
        )
    } else {
        return (
            <div className='error__container'>
                <h1 className='error__oops'>Oops!</h1>
                <p className='error__message'>Sorry, an unexpected error has occured.</p>
                <Link to='/' className='error__button'>Return Home</Link>
            </div>
        )
    }
}

export default ErrorPage;
