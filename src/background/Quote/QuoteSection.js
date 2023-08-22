import React, {useEffect, useState} from 'react';
import styles from "./quoteSection.module.css";



const Quote = ({scrollPercentage}) =>{
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {

        // const getOpacityGrowing = () => {
        //
        //     const opacityMinimal = 0
        //     const opacityMaximal = 1
        //     const opacityStart = 0 / 16
        //     const opacityEnd = 1 / 16
        //
        //     if (scrollPercentage <= opacityStart) return opacityMinimal
        //     if (scrollPercentage >= opacityEnd) return opacityMaximal
        //
        //     return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        // }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 0 / 15
            const opacityEnd = 0.7 / 15

            if (scrollPercentage <= opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }
        setOpacity(getOpacityShrinking())


    }, [scrollPercentage])

    return(
        <div className={styles.textContainer} style={{opacity:opacity }}>
            <p className={styles.text}><span>&#8220;&nbsp;You can't connect the dots looking forward,</span></p>
            <p className={styles.text}><span>&nbsp;&nbsp;&nbsp;You can only connect them looking backward</span></p>
            <p className={styles.text}><span>&nbsp;&nbsp;&nbsp;So you have to trust that the dots</span></p>
            <p className={styles.text}><span>&nbsp;&nbsp;&nbsp;Will somehow connect in your future.&#8221;</span></p>
            <p className={styles.text}><span className='author'>&#x23AF;Steve Jobs</span></p>
        </div>
    )
}

export default Quote