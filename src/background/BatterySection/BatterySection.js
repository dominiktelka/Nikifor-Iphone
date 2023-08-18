import React, {useEffect, useState} from 'react';
import styles from './BatterySection.module.css'



const BatterySection = ({currentSectionNumber}) => {
    const [batteryItemsCount] = useState(5);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
       {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % batteryItemsCount);
            }, 2000);

            return () => clearInterval(interval); // Czyszczenie intervalu, gdy komponent jest odmontowywany
        }
    }, [batteryItemsCount]);

    return (
        // {currentSectionNumber === 7 &&()}
        <section className={styles.section}>
            <h1 className={currentSectionNumber === 7 ? `${styles.batteryH1} ${styles.animation}`: '' }>Go all day with single charge...</h1>
            <ul className={currentSectionNumber === 7 ? `${styles.battery} ${styles.animationMoveLeft}`: '' }>

                    {Array.from({ length: batteryItemsCount }).map((_, index) => (
                        <li
                            key={index}
                            className={index >= activeIndex ? styles.active : ''}
                            style={{
                                animationDelay: `${(batteryItemsCount - index - 1) * 0.1}s`, // Zmniejszamy szybkość pojawiania się elementu
                            }}
                        ></li>
                    ))}
            </ul>
        </section>
    );
};

export default BatterySection;
