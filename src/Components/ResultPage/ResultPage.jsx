import React from 'react';
import styles from './ResultPage.module.css';
import {NavLink} from 'react-router-dom';
import CharactersList from './../Character/CharactersList.js'
import Preloader from './../Preloader/Preloader.jsx'


const ResultPage = (props) => {

 	const {backToSearch} = props;
 	const {requestName, requestStatus, requestGender, characters} = props.state;

	return (
		<div className={styles.result_page}>

			<div className={styles.topPannel}>
				<NavLink to="/search" onClick={backToSearch}>
					<button className={styles.backButton}></button>
				</NavLink>		
				<h2 className={styles.searchTitle}>Search results</h2>
			</div>

			<div>
				<span className={styles.options}>Options:</span>
				<span className={styles.optionValues}>Name: {requestName}</span>
				{requestGender && <span className={styles.optionValues}>Gender: {requestGender}</span>}
				{requestStatus && <span className={styles.optionValues}>Status: {requestStatus}</span>}
			</div>

			<hr/>
			
			{
				!props.isLoaded ? <Preloader /> : <CharactersList characters={characters}/>			
			}

			{
				props.isLoaded && !characters[0] 
				&& <div className={styles.noCharacters}>
						No characters with such options
					</div>				
			}
		</div>
	)
}

export default ResultPage;