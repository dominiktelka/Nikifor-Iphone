import React from 'react';

import styles from './displaySection2.module.css'




const DisplaySection2 = ({currentSectionNumber}) =>{

    return(
        <section className={ currentSectionNumber === 5 ? `${styles.animation} ${styles.section}` : ''}>
            <div className={styles.textContainer}>
                <p className={styles.movingText} >Layer of Ceramic Shield</p>
            </div>
            <div className={styles.textBlockLeft} >
                <h2>The glass is combined with nanoceramic crystals - harder than most metals - to significantly increase its strength.</h2>
                <p>
                    The double ion exchange process further protects the surface from abrasions, scratches and daily wear and tear.
                </p>
            </div>
        </section>

    )
}

export default DisplaySection2