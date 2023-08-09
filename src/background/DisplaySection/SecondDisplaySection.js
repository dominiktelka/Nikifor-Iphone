import React from 'react';

import styles from './displaySection2.module.css'




const DisplaySection2 = ({currentSectionNumber}) =>{

    return(
        <section className={ currentSectionNumber === 5 ? `${styles.animation} ${styles.section}` : ''}>
            <div className={styles.textBlockLeft} >
                <h2>Big is better</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam molestias odio repellendus veniam voluptate voluptatibus. Accusantium aperiam, aut distinctio dolorum excepturi illum magni officiis pariatur quasi quidem quos tempora.
                </p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.movingText} >Toughter than ever.</p>
                <p className={styles.movingText} >Every touch matters.</p>
            </div>
        </section>

    )
}

export default DisplaySection2