import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './BatterySection.module.css'



const BatterySection = () => {
    const [batteryItemsCount] = useState(5);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % batteryItemsCount);
        }, 1500);

        return () => clearInterval(interval); // Czyszczenie intervalu, gdy komponent jest odmontowywany
    }, [batteryItemsCount]);

    return (
        <section className={styles.section}>
            <h1>Go all day with single charge...</h1>
            <ul className={styles.battery}>
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
