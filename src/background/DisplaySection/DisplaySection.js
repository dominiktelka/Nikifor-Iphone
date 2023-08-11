import React from 'react';
import styles from './displaySection.module.css'


const DisplaySection = ({currentSectionNumber}) =>{

    return(
        <section className={ currentSectionNumber === 4 ? `${styles.animation} ${styles.section}` : ''}>
            <h1 className={styles.title}>
                Impressive <br/> Display
            </h1>
            <div className={styles.textBlockRight}>
                <h2>Super Ratine XDR Display</h2>
                <p>
                    Offer a wide dynamic range (HDR) to accurately reproduce the dark and light areas of photos and videos. The display of deep blacks and pure, bright whites is possible while preserving the details of the intermediate shades. Photos get a vivid look and anything viewed in Dolby Vision, HDR10 or HLG is truly stunning.
                </p>
            </div>
        </section>

    )
}

export default DisplaySection;