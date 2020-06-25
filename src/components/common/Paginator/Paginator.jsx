import React from "react";
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (


            <div className={styles}>
                {pages.map(p => <span className={currentPage === p && styles.selectedPage} onClick={() => {
                    onPageChanged(p)
                }}>{p}</span>)}
            </div>

    )
}

export default Paginator;

