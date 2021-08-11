import React from 'react';
import styles from './SearchPage.module.css';
import SearchForm from './SearchForm/SearchForm.js'



const SearchPage = (props) => {

	return (
	<div className={styles.searchPage}>
		<SearchForm changeState={props.changeState}/>
	</div>
)
}

export default SearchPage;