import React, {useEffect, useState} from 'react';
import styles from './displaySection.module.css'


const DisplaySection = ({scrollPercentage}) =>{
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 2.8 / 15
            const opacityEnd = 3.2 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 3.5 / 15
            const opacityEnd = 4 / 15

            if (scrollPercentage < opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 3 / 15) {
            setOpacity(getOpacityGrowing())
        } else {
            setOpacity(getOpacityShrinking())
        }


    }, [scrollPercentage])

    return(
        <section className={styles.section} style={{opacity:opacity}}>
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