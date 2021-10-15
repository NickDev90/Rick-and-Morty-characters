import React from 'react';
import styles from './Character.module.css'; 
import Character from './Character.js'
import { Paginator } from '../Paginator/Paginator';



const CharactersList = ({characters, heroesCount, requestName, requestStatus, requestGender, requestPage, changeState}) => {

console.log();
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
  
   <Paginator heroesCount={heroesCount} requestName={requestName} requestPage={requestPage}
       requestStatus={requestStatus} requestGender={requestGender} changeState={changeState}/>

    </div>)
} 

export default CharactersList;
