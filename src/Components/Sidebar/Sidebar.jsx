import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import mainImage from '../../assets/images/rick-and-morty-portal-shoes-white-clothing-zavvi-23 1.png'

const Sidebar = () => {
	return <div className={styles.sidebar}>
	<div className={styles.img}>
		<img src={mainImage} alt="" />
	</div>
	</div>
}

export default Sidebar;