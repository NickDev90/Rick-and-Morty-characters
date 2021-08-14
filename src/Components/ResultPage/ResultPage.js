import React, {useEffect} from 'react';
import styles from './ResultPage.module.css';
import {NavLink} from 'react-router-dom';
import CharactersList from './../Character/CharactersList.js'
import Preloader from './../Preloader/Preloader.jsx'
import { useHistory } from 'react-router-dom'
import * as queryString from 'querystring';

const ResultPage = (props) => {
	const {backToSearch, changeState} = props;
 	const {requestName, requestStatus, requestGender, characters} = props.state;

	const history = useHistory()

	useEffect( () => {
		const parsed = queryString.parse(history.location.search.substr(1))
		
		let parsedName = requestName;
		if (parsed.name) {
			parsedName = parsed.name
		}

		let parsedStatus = requestStatus;
		if (parsed.status) {
			parsedStatus = parsed.status
		}

		let parsedGender = requestGender;
		if (parsed.gender) {
			parsedGender = parsed.gender
		}

		changeState(parsedName, parsedStatus, parsedGender);

	}, [])

 	
 	useEffect ( () => {
 		
		if(requestStatus && requestGender){
			history.push({
				pathname: 'results',
				search: `?name=${requestName}&status=${requestStatus}&gender=${requestGender}`
			})
		}else if(requestGender) {
			history.push({
				pathname: 'results',
				search: `?name=${requestName}&gender=${requestGender}`
			})
		}else if(requestStatus) {
			history.push({
				pathname: 'results',
				search: `?name=${requestName}&status=${requestStatus}`
			})
		}else {
			history.push({
				pathname: 'results',
				search: `?name=${requestName}`
			})
		}
	}, [requestName, requestStatus, requestGender])


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