import React from 'react';
import styles from './Character.module.css'; 
import {useHistory} from 'react-router-dom';




const Character = ({hero}) => {

   const history = useHistory();

	return (
  				<div className={styles.heroInfo}>
                     <span>
                        <img src={hero.image} className={styles.heroPhoto} 
                           onClick={() => history.push(`hero/${hero.id}`)}
                        />
                     </span>                 
                     <span className={styles.heroName}>{hero.name}</span>
                     <span>{hero.gender}</span>
                     <span>{hero.status}</span>
                     <span>{hero.location.name}</span>
  				</div>
   )
}


export default Character;