import React from 'react';
import styles from './SearchPage.module.css';
import {NavLink} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'; 
import SearchForm from './SearchForm.js'


const SearchPage = (props) => {

	return (
	<div className={styles.searchPage}>


	<SearchForm changeState={props.changeState}/>

	</div>
)
}

export default SearchPage;