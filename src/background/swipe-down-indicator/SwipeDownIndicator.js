import React from "react";
import styles from './SwipeDownIndicator.module.css'
const  SwipeDownIndicator = () => {
    return (
        <div className={styles.mainContainer} style={{bottom:'5svh'}}>
            <div className={styles.text}>Swipe down</div>
            <div className={styles.arrowDown}/>
        </div>
    )
}
 export default SwipeDownIndicator
