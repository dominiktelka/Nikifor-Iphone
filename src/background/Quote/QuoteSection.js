import React, {useEffect} from 'react';
import styles from "./quoteSection.module.css";



const Quote = () =>{

    return(
        <div className={styles.textContainer}>
            <p className={styles.text}><span>&#8220;&nbsp;You can't connect the dots looking forward,</span></p>
            <p className={styles.text}><span>&nbsp;&nbsp;&nbsp;You can only connect them looking backward</span></p>
            <p className={styles.text}><span>&nbsp;&nbsp;&nbsp;So you have to trust that the dots</span></p>
            <p className={styles.text}><span>&nbsp;&nbsp;&nbsp;Will somehow connect in your future.&#8221;</span></p>
            <p className={styles.text}><span className='author'>&#x23AF;Steve Jobs</span></p>
            <div className={styles.down}>swipe down</div>
        </div>
    )
}

export default Quote