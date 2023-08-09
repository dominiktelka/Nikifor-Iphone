import React from 'react';
import styles from './displaySection.module.css'


const DisplaySection = ({currentSectionNumber}) =>{

    return(
        <section className={ currentSectionNumber === 4 ? `${styles.animation} ${styles.section}` : ''}>
            <h1 className={styles.title}>
                Impressive <br/> Display
            </h1>
            <div className={styles.textBlockLeft}>
                <h2>Super Ratine XDR Display</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam molestias odio repellendus veniam voluptate voluptatibus. Accusantium aperiam, aut distinctio dolorum excepturi illum magni officiis pariatur quasi quidem quos tempora.
                </p>
            </div>
        </section>

    )
}

export default DisplaySection;