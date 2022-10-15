import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {

    const Brandstyle = {
        color: '#fff',
        textDecoration : 'none',
        fontSize :'22px',
        display :'flex',
        alignItems :'center'
    };

    const logoText =  {
        marginText : '10px',
    };
  return (

    <nav className= {`${styles.navbar} container`}>
     <Link style={Brandstyle} to="/">

         <img src="/images/logo.png" alt ="logo"/>

          <span style = {logoText}>Hello Coderhouse</span>

     </Link>

    </nav>
  )
}

export default Navigation