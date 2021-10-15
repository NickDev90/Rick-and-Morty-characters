import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import { reqApi } from "../../API/reqApi";
import styles from './Paginator.module.css';
import cn from 'classnames';


export const Paginator = ({heroesCount, requestName, requestStatus, requestGender, requestPage=1, changeState}) => {

    const pagesCount = Math.ceil(heroesCount / 20)

    let realPages = []

    for (let i = 1; i <= pagesCount; i++) {
        realPages.push(i);
    }

    return (
        <div className={styles.paginator}>
   
            { pagesCount > 1 &&
                realPages.map( p => 
                    <span className={requestPage == p ? cn(styles.pageNumber, styles.selectedPage) : styles.pageNumber} 
                    onClick={() => changeState(requestName, requestStatus, requestGender, p)} key={p}> 
                       {p}
                     </span> )
            }
        </div>
    )
}
