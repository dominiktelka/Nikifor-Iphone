import React, {useEffect, useState} from 'react';
import backgroundVideo from '../../video/Ink - 21536.mp4';
import styles from "./HeroSection.module.css";


const HeroSection = ({ currentSectionNumber,scrollPercentage }) => {

    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 0.5 / 15
            const opacityEnd = 1 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 1 / 15
            const opacityEnd = 2 / 15

            if (scrollPercentage < opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 1 / 15) {
            setOpacity(getOpacityGrowing())
        } else {
            setOpacity(getOpacityShrinking())
        }


    }, [scrollPercentage])

    return (
        <div style={{opacity:opacity}}>
            {currentSectionNumber === 2 && (
                <div className={styles.videoContainer}>
                    <video
                        className={styles.video}
                        src={backgroundVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                </div>
            )}
            <h1 className={styles.title}>Iphone 14 Pro max</h1>
            <div className={styles.title2}>
                <span className={styles.bold}>so bold</span>
                <span className={styles.cold}>so cold</span>
            </div>
        </div>
    );
};

export default HeroSection;



