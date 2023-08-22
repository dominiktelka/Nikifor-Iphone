import React, {useContext, useEffect, useRef, useState} from "react";
import styles from "./pricingSection.module.css";
import {ColorContext} from "../ColorContex/ColorContext";


const PricingSection = ({currentSectionNumber,scrollPercentage}) => {

    const {changeColorContext } = useContext(ColorContext);


    let updateColor = (color, text, rgbColor) => {
        const colorObj = {
            color,
            text,
            rgbColor,
        };
        changeColorContext(colorObj);
    };

    const handleBuyClick = () => {
        window.location.href = 'https://www.apple.com/pl/shop/buy-iphone/iphone-14-pro';
    };

    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 13.7 / 15
            const opacityEnd = 14.5 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 14.5 / 15
            const opacityEnd = 14.8 / 15


            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 14 / 15) {
            setOpacity(getOpacityGrowing());
        } else{
            setOpacity((getOpacityShrinking()))
        }


    }, [scrollPercentage])

    return (
            <div className={styles.pricingSection} style={{opacity:opacity}}>
                    <ul className={styles.Colors}>
                        <button className={styles.colorButton} onClick={() => updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#e0ca9b", "Gold", "249, 229, 201")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#505F4E", "Alpine Green", "80, 95, 78")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#574f6f", "Deep Purple", "87, 79, 111")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#A50011", "Red", "165, 0, 17")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")}/>
                    </ul>

                <div className={styles.details}>
                    <h2 className={styles.subtitle}>iPhone</h2>
                    <h2 className={styles.subtitle}>14 Pro Max</h2>
                    <h2 className={styles.subtitle}>From $1099</h2>
                    <div className={styles.buttonContainer}>
                        <button className={styles.buy} onClick={handleBuyClick}>Buy</button>
                        <a className={styles.btnLink} href="https://www.apple.com/pl/iphone-14-pro/">Learn More &#x2192;</a>
                    </div>
                </div>
            </div>
    );
};

export default PricingSection;