import { Link, useRouteError } from 'react-router-dom'
import './errorPage.css'
import Header from './Header'

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <>
        <Header />
        <div className='error-page'>
         <img alt='error' src='https://cdn-icons-png.freepik.com/256/5764/5764542.png?ga=GA1.1.1183851889.1740998600&semt=ais_hybrid' />
         <p className='error-status'>{error.status} : {error.statusText}</p>
         <p className='error-status'>{error.data}</p>
         <p>return to <Link className='error-return-link' to="/">Home</Link></p>
        </div>
    </>
  )
}

export default ErrorPage