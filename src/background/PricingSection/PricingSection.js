import React, {useContext, useEffect, useRef, useState} from "react";
import styles from "./pricingSection.module.css";
import {ColorContext} from "../ColorContex/ColorContext";



const PricingSection = ({currentSectionNumber}) => {

    const {changeColorContext } = useContext(ColorContext);


    let updateColor = (color, text, rgbColor) => {
        const colorObj = {
            color,
            text,
            rgbColor,
        };
        changeColorContext(colorObj);
    };

    return (
            <div className={styles.pricingSection} >
                    <ul className={styles.Colors}>
                        <button className={styles.colorButton} onClick={() => updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#e0ca9b", "Gold", "249, 229, 201")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#505F4E", "Alpine Green", "80, 95, 78")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#574f6f", "Deep Purple", "87, 79, 111")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#A50011", "Red", "165, 0, 17")}/>
                        <button className={styles.colorButton} onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")}/>
                    </ul>

                <div className={currentSectionNumber === 15 ? `${styles.details} ${styles.animationMoveDown}`: '' }>
                    <h2 className={styles.subtitle}>iPhone</h2>
                    <h2 className={styles.subtitle}>14 Pro Max</h2>
                    <h2 className={styles.subtitle}>From $1099</h2>
                    <div className={styles.buttonContainer}>
                        <button className={styles.buy}>Buy</button>
                        <a className={styles.btnLink} href="#">Learn More &#x2192;</a>
                    </div>
                </div>
            </div>
    );
};

export default PricingSection;