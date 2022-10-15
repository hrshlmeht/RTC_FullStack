//
import styles from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({title , icon , children}) => {
  return (
    <div className= {styles.card}> 
      <div className = {styles.HeadersWrapper}>
         <img src ={`/images/${icon}.png`} alt ='logo' />
         <h1 className={styles.heading}>{title}</h1>
      </div>
      {children}
    </div>
  );
}

export default Card