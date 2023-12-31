import React, {useContext, useEffect, useRef, useState} from "react";
import styles from './colorSection.module.css';
import {ColorContext} from "../ColorContex/ColorContext";

const ColorSection = ({ currentSection,scrollPercentage }) => {

    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 6.5 / 15
            const opacityEnd = 7 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 12 / 15
            const opacityEnd = 12.6 / 15


            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 7 / 15) {
            setOpacity(getOpacityGrowing());
        } else if (scrollPercentage >= 8/15 && scrollPercentage <= 12/15) {
            setOpacity(1);
        } else if(scrollPercentage < 13 / 15){
            setOpacity((getOpacityShrinking()))
        }else{
            setOpacity(0)
        }


    }, [scrollPercentage])

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



    return (
        <section className={styles.section} ref={sectionRef} style={{opacity: opacity}}>
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




