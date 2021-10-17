import React, { useEffect, useState } from 'react';
import styles from './SingleCharacter.module.css'; 
import { useHistory } from 'react-router-dom'
import { reqApi } from '../../API/reqApi';



const SingleCharacter = ({match}) => {

   const [hero, setHero] = useState();
   const history = useHistory();
   const id = match.params.id;

   useEffect( () => {
      reqApi.getOneCharacter(id)
      .then(res => setHero(res))
   }, [])

	return (
            <div className={styles.singleCharacterPage}>

                  <div className={styles.topPannel}>
                     <button className={styles.backButton} onClick={()=> history.goBack()}></button>
                     <h2 className={styles.searchTitle}>Selected Character</h2>
                  </div>
                  
               { hero &&
                  <div className={styles.heroCard}>

                     <div className={styles.leftSide}>
                        <h1>{hero.name}</h1>
                        <div className={styles.heroImage}>
                           <img src={hero.image} alt="" />
                        </div>
                     </div>

                     <div className={styles.rightSide}>
                        <ul className={styles.heroInfo}>
                           <li><b>Species:</b> {hero.species}</li>
                           <li><b>Status:</b> {hero.status}</li>
                           <li><b>Gender:</b> {hero.gender}</li>
                           <li><b>Location:</b> {hero.location.name}</li>
                           { hero.type &&
                              <li><b>Type:</b> {hero.type}</li>
                           }
                           
                        </ul>
                     </div>
                  
                  </div>
               }
  				</div>
      
   )
}

export default SingleCharacter;