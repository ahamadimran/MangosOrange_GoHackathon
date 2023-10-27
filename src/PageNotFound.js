import React, { Fragment} from 'react';
import Menu from './pages/Menu';
import Footer from './pages/Footer';

const PageNotFound = () => {
  return (
    <Fragment>
        <Menu />
        <div className='container error'>
            <img src='img/404error.jpg' alt='404 Error' />
        </div>
        <Footer />
    </Fragment>
  )
}

export default PageNotFound
