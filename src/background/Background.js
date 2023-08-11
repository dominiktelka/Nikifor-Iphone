import styles from './Background.module.css'
import DisplaySection from "./DisplaySection/DisplaySection";
import SecondDisplaySection from "./DisplaySection/SecondDisplaySection";
import DesignSection from "./DesignSection/DesignSection";
import InteractionSection from "../InteractionSection/InteractionSection";
import BatterySection from "./BatterySection/BatterySection";
import QuoteSection from "./Quote/QuoteSection";
import HeroSection from "./HeroSection/HeroSection";
import ProcessorSection from "./ProcessorSection/ProcessorSection";
import {ColorContext, ColorContextProvider} from "./ColorContex/ColorContext";
import ColorSection from "./ColorSection/ColorSection";
import {useContext, useEffect, useState} from "react";
import CameraSection from "./CameraSection/CameraSection";
import PricingSection from "./PricingSection/PricingSection";

export default function Background({ currentSectionNumber , materials}) {

    // useEffect(() => {
    //     const starsContainer = document.querySelector(`.${styles.stars}`);
    //     const numStars = 40; // You can adjust the number of stars
    //
    //     for (let i = 0; i < numStars; i++) {
    //         const star = document.createElement('div');
    //         star.classList.add(styles.star); // Use styles.star to add CSS class
    //         star.style.top = `${Math.random() * 100}vh`;
    //         star.style.left = `${Math.random() * 100}vw`;
    //         star.style.left = `${Math.random() * 100}vw`;
    //         star.style.width = `${Math.random() * 3}px`;
    //         star.style.height = star.style.width;
    //         star.style.animationDelay = `${-Math.random() * 10}s`; // Added negative delay
    //         starsContainer.appendChild(star);
    //     }
    // }, []);


    const sectionsVisible = [8, 9, 10, 11, 12, 13].includes(currentSectionNumber);

    return (
        <>
            <div className={styles.stripe} style={{ height: `${currentSectionNumber === 1 ? 100 : 0}vh`, width:'100vw', opacity:1 }}>
                <QuoteSection/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 2 ? 100 : 0}vh`, width:'100vw'}}>
                <HeroSection/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 3 ? 100 : 0}vh`, width:'100vw'}}>
                <div className={`${styles.stars} stars`} />
                <DesignSection currentSectionNumber={currentSectionNumber}/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 4 ? 100 : 0}vh`, width:'100vw' }}>
                <DisplaySection currentSectionNumber={currentSectionNumber}/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 5 ? 100 : 0}vh`, width:'100vw' }}>
                <SecondDisplaySection currentSectionNumber={currentSectionNumber}/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 6 ? 100 : 0}vh`, width:'100vw' }}>
                <ProcessorSection currentSectionNumber={currentSectionNumber}/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 7 ? 100 : 0}vh`, width:'100vw'}}>
                <BatterySection currentSectionNumber={currentSectionNumber}/>
            </div>
                <ColorContextProvider materials={materials}>
                    <div className={styles.stripe} style={{ height: `${sectionsVisible ? 100 : 0}vh`, width:'100vw' }}>
                        <ColorSection currentSection={currentSectionNumber} />
                    </div>
                    <div className={styles.stripe} style={{ height: `${currentSectionNumber === 14 ? 100 : 0}vh`, width:'100vw' }}>
                            <CameraSection currentSectionNumber={currentSectionNumber} />
                    </div>
                    <div className={styles.stripe} style={{ height: `${currentSectionNumber === 15 ? 100 : 0}vh`, width:'100vw' }}>
                        <PricingSection currentSectionNumber={currentSectionNumber}/>
                    </div>
                </ColorContextProvider>
            {/*<div className={styles.stripe} style={{height: `${currentSectionNumber === 16 ? 100 : 0}vh`, width: `${currentSectionNumber === 16 ? 100 : 0}vw` }}>*/}
            {/*    /!*<InteractionSection/>*!/*/}
            {/*</div>*/}
        </>
    );
}