import React from 'react';
import styles from './Character.module.css'; 
import {NavLink} from 'react-router-dom';
import { reqApi } from '../../API/reqApi';



const Character = ({hero}) => {


	return (
  				<div className={styles.heroInfo}>
                     <span>
                        <img src={hero.image} className={styles.heroPhoto} onClick={ ()=> reqApi.getOneCharacter(hero.id) }/>
                     </span>
                     <span className={styles.heroName} onClick={ ()=> reqApi.getOneCharacter(hero.id) } >{hero.name}</span>
                     <span>{hero.gender}</span>
                     <span>{hero.status}</span>
                     <span>{hero.location.name}</span>
  				</div>
   )
}






export default Character;