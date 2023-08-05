import { isRouteErrorResponse, useRouteError  } from 'react-router-dom';
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
            </div>
        )
    } else {
        return (
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
            </div>
        )
    }
}

export default ErrorPage;
