import React, {useEffect, useState} from 'react';
import styles from './DesingSection.module.css';

const DesignSection = ({ currentSectionNumber,scrollPercentage }) => {
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 1.8 / 15
            const opacityEnd = 2.4 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 2.5 / 15
            const opacityEnd = 3 / 15

            if (scrollPercentage < opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 2 / 15) {
            setOpacity(getOpacityGrowing())
        } else {
            setOpacity(getOpacityShrinking())
        }


    }, [scrollPercentage])
    return (
        <div style={{opacity:opacity}}>
            <p className={styles.textContainer}>
                <span>Flaw-less design with strong durability.</span>
            </p>
            <p className={styles.textContainer2}>
                <span >Flat-edge design with toughest smartphone glass</span>
            </p>
        </div>


    );
};

export default DesignSection;