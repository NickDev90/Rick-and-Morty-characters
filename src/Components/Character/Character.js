import React from 'react';
import styles from './Character.module.css'; 
import {NavLink} from 'react-router-dom';



const Character = ({hero}) => {

	return (
  				<div className={styles.heroInfo}>
                     <span>
                        <img src={hero.image} className={styles.heroPhoto}/>
                     </span>
                     <span className={styles.heroName}>{hero.name}</span>
                     <span>{hero.gender}</span>
                     <span>{hero.status}</span>
                     <span>{hero.location.name}</span>
  				</div>
   )
}






export default Character;