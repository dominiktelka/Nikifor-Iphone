import React, {useEffect, useState} from 'react';
import styles from './processorSection.module.css'
import a16 from "./a16.jpg"


const ProcessorSection = ({currentSectionNumber,scrollPercentage}) =>{
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 4.5 / 15
            const opacityEnd = 5 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 5 / 15
            const opacityEnd = 5.7 / 15

            if (scrollPercentage < opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 5 / 15) {
            setOpacity(getOpacityGrowing())
        } else {
            setOpacity(getOpacityShrinking())
        }


    }, [scrollPercentage])


    return(
        <section className={styles.section} style={{opacity:opacity}}>
            <h1>Fastest Processor</h1>
            <div className={styles.imgContainer}>
                <img src={a16} alt="A16 Processor"/>
            </div>
            <div className={styles.text}>
                <span>Nearly 16 billion transistors for industry-leading speed and efficiency</span>
                <span>5-core GPU with 50% more memory bandwidth for complex graphics</span>
                <span>Faster 6-core CPU handles demanding workloads smoothly and efficiently</span>
                <span>Advanced ISP powers the creative flexibility of the quad-pixel sensor</span>
            </div>
        </section>
    )
}

export default ProcessorSection;