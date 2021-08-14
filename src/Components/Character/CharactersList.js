import React from 'react';
import styles from './Character.module.css'; 
import Character from './Character.js'



const CharactersList = ({characters}) => {


   return  (
   <div>

   {  characters[0] &&    
      <div className={styles.description}>
         <span>Photo</span>
         <span className={styles.nameField}>Name</span>
         <span>Gender</span>
         <span>Status</span>
         <span>Location</span>
      </div>
   }

   {
      characters.map( (item) => <Character hero={item} key={item.id}/> )
   }      

    </div>)
} 

export default CharactersList;
