import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <>

            <div className='error-container'>
                <h1 className='error-h1'>Oops! Something went wrong.</h1>
                <p className='error-p'>We’re sorry, but the page you’re looking for doesn’t exist or an unexpected error has occurred.
                    Please check the URL or return to the <a className='error-a' href="" onClick={(e) => { e.preventDefault(); navigate('/') }}>homepage</a>.</p>
                <p className='error-code'><span>Error code: </span>404 - Page Not Found</p>
            </div>

        </>
    );
};

export default ErrorPage;