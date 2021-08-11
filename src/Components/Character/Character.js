import React from 'react';
import styles from './Character.module.css'; 
import {NavLink} from 'react-router-dom';
import anonPhoto from './../../assets/images/anon_photo.jpg';



const Character = (props) => {

	return  <div>
  				<div className={styles.heroInfo}>
                     <span>
                        <img src={props.hero.image || anonPhoto} 
                           className={styles.heroPhoto}/>
                     </span>
                     <span className={styles.heroName}>{props.hero.name}</span>
                     <span>{props.hero.gender}</span>
                     <span>{props.hero.status}</span>
                     <span>{props.hero.location.name}</span>
  				</div>

    </div>
}






export default Character;