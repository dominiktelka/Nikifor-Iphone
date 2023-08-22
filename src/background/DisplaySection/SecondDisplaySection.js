import React, {useEffect, useState} from 'react';

import styles from './displaySection2.module.css'




const DisplaySection2 = ({currentSectionNumber,scrollPercentage}) =>{
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 3.8 / 15
            const opacityEnd = 4.2 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 4.2 / 15
            const opacityEnd = 4.7 / 15

            if (scrollPercentage < opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 4 / 15) {
            setOpacity(getOpacityGrowing())
        } else {
            setOpacity(getOpacityShrinking())
        }


    }, [scrollPercentage])


    return(
        <section className={styles.section} style={{opacity:opacity}}>
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