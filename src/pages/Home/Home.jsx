import React from 'react'
import styles from './Home.module.css'
import {Link , useNavigate} from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {

  const signInLinkStyle=
  {
      color : '#F0F8FF',
      fontWeight :'bold',
      marginLeft :'10px',
  };


  const navigate = useNavigate();
  function startRegister() {
    navigate(`register`);
  }
  return (

  <div className = {styles.CardWrapper}>
  <Card title = 'Fullstack Development' icon = 'logo' >
  <p className={styles.text}>I am working hard as a fse and making sure that the entire community stays together and no person is left behind. Just sign up and have fun with the community</p>
  <div>
    <Button onClick={startRegister} text = 'Get your Username' />
  </div>
  <div className ={styles.signInWrapper}>
     <span className={styles.hasInvite}>Have an invite text?</span>
     <Link style ={signInLinkStyle} to ="/login">Sign in</Link>
  </div>
  </Card>

   </div>
  );
}

export default Home;