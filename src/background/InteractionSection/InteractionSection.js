import React, {useEffect, useState} from 'react'
import styles from './interaction.module.css'
const InteractionSection = ({scrollPercentage}) =>{
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 14.8 / 15
            const opacityEnd = 15 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        // const getOpacityShrinking = () => {
        //
        //     const opacityMinimal = 0
        //     const opacityMaximal = 1
        //     const opacityStart = 14.5 / 15
        //     const opacityEnd = 14.8 / 15
        //
        //
        //     if (scrollPercentage > opacityEnd) return opacityMinimal
        //
        //     return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        // }


        setOpacity(getOpacityGrowing());


    }, [scrollPercentage])


    return (
        <div className={styles.sectionText} style={{opacity:opacity}}>

            <div className={styles.sectionContentContainer}>
                <img className={styles.nikilogo} src={'./icons/nikifor.jpeg'} alt={''}/>

                <h1>
                    Designed and developed by Nikifor
                </h1>

                <div className={styles.iconsContainer} style={{pointerEvents: scrollPercentage === 1 ? 'all' : 'none' }}>
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