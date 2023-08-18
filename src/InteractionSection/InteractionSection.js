import React from 'react'
import styles from './interaction.module.css'




const InteractionSection = () =>{


    return (
        <div className={styles.sectionText}>

            <div className={styles.sectionContentContainer}>
                <img className={styles.nikilogo} src={'./icons/nikifor.jpeg'} alt={''}/>

                <h1>
                    Designed and developed by Nikifor
                </h1>

                <div className={styles.iconsContainer} >
                    <img src={'./icons/instagram.png'}
                         onClick={() => window.location.href = "https://www.instagram.com/nikifor.softwarehouse/"}/>
                    <img src={'./icons/linkedin.png'}
                         onClick={() => window.location.href = "https://www.linkedin.com/company/nikifor/"}/>
                    <img src={'./icons/github.png'} onClick={() => window.location.href ='https://github.com/dominiktelka'}/>
                </div>
            </div>

        </div>
    )
}

export default InteractionSection;