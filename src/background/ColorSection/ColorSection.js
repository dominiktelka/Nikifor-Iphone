import React, {useContext, useEffect, useRef, useState} from "react";
import styles from './colorSection.module.css';
import {ColorContext} from "../ColorContex/ColorContext";

const ColorSection = ({ currentSection,scrollPercentage }) => {

    const sectionRef = useRef(null);
    const rightRef = useRef(null);
    const leftRef = useRef(null);
    const { currentColor, changeColorContext } = useContext(ColorContext);
    const [displayText, setDisplayText] = useState(currentColor.text)
    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        let rightElem = rightRef.current;
        let leftElem = leftRef.current;



        rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
        leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`;

    }, [currentColor,scrollPercentage]);

    const colors = [
        ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        ["#F9E5C9", "Gold", "249, 229, 201"],
        ["#505F4E", "Alpine Green", "80, 95, 78"],
        ["#574f6f", "Deep Purple", "87, 79, 111"],
        ["#A50011", "Red", "165, 0, 17"],
        ["#215E7C", "Blue", "33, 94, 124"]
    ];

    const updateColor = (color, text, rgbColor) => {
        const colorObj = {
            color,
            text,
            rgbColor
        };
        changeColorContext(colorObj);
    };

    useEffect(() => {
        if (currentSection >= 8 && currentSection <= 13) {
            const colorIndex = currentSection - 8;
            const [colorHex, colorText, rgbColor] = colors[colorIndex];
            updateColor(colorHex, colorText, rgbColor);
            if (currentSection === 8) {
                setAnimateText(false);
                setDisplayText(colorText);
            } else {
                setAnimateText(true);
                setTimeout(() => {
                    setAnimateText(false);
                    setDisplayText(colorText);
                }, 700);
            }
        }
    }, [currentSection]);

    useEffect(() => {
        if (scrollPercentage >= 0.81) {
            sectionRef.current.classList.add(styles.opacityTransition, styles.fadeOut);
        } else {
            sectionRef.current.classList.remove(styles.fadeOut);
        }
    }, [scrollPercentage]);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.left} ref={leftRef} />
            <div className={styles.center}>
                    <div className={` ${animateText ? styles.animatingText : ''}`}>
                        {displayText}
                    </div>
            </div>
            <div className={styles.right} ref={rightRef} />
        </section>
    );
};

export default ColorSection;




