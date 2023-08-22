import React, {useEffect, useState} from 'react';
import styles from './BatterySection.module.css'



const BatterySection = ({scrollPercentage}) => {
    const [batteryItemsCount] = useState(5);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
       {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % batteryItemsCount);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [batteryItemsCount]);


    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 5.5 / 15
            const opacityEnd = 6 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 6 / 15
            const opacityEnd = 6.7 / 15

            if (scrollPercentage < opacityStart) return opacityMaximal
            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 6 / 15) {
            setOpacity(getOpacityGrowing())
        } else {
            setOpacity(getOpacityShrinking())
        }


    }, [scrollPercentage])

    return (
        <section className={styles.section} style={{opacity:opacity}}>
            <h1 className={styles.batteryH1}>Go all day with single charge...</h1>
            <ul className={styles.battery}>

                    {Array.from({ length: batteryItemsCount }).map((_, index) => (
                        <li
                            key={index}
                            className={index >= activeIndex ? styles.active : ''}
                            style={{
                                animationDelay: `${(batteryItemsCount - index - 1) * 0.1}s`,
                            }}
                        ></li>
                    ))}
            </ul>
        </section>
    );
};

export default BatterySection;
