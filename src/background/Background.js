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
import {useContext, useState} from "react";
import CameraSection from "./CameraSection/CameraSection";
import PricingSection from "./PricingSection/PricingSection";
import SmoothColorTransition from "../hooks/SmoothColorTransition";

export default function Background({ scrollPercentage,sectionsAmount }) {

    const calculateSectionRange = (sectionNumber) => {
        const sectionPercentage = 100 / sectionsAmount;
        const startPercentage = (sectionNumber - 1) * sectionPercentage;
        const endPercentage = sectionNumber * sectionPercentage;
        return { startPercentage, endPercentage };
    };


    const generateSections = (scrollPercentage) => {
        let visibleSection = null;

        for (let i = 1; i <= sectionsAmount; i++) {
            const { startPercentage, endPercentage } = calculateSectionRange(i);
            if (scrollPercentage >= startPercentage / 100 && scrollPercentage <= endPercentage / 100) {
                visibleSection = i;
                break;
            }
        }
        return visibleSection;
    };



    const currentSectionNumber = generateSections(scrollPercentage);


    const sectionsVisible = [8, 9, 10, 11, 12, 13].includes(currentSectionNumber);

    return (
        <>
            <div className={styles.stripe} style={{ height: `${currentSectionNumber === 1 ? 100 : 0}vh`, width: `${currentSectionNumber === 1 ? 100 : 0}vw` }}>
                <QuoteSection/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 2 ? 100 : 0}vh`, width: `${currentSectionNumber === 2 ? 100 : 0}vw`}}>
                <HeroSection/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 3 ? 100 : 0}vh`, width: `${currentSectionNumber === 3 ? 100 : 0}vw` }}>
                <DesignSection currentSectionNumber={currentSectionNumber}/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 4 ? 100 : 0}vh`, width: `${currentSectionNumber === 4 ? 100 : 0}vw` }}>
                <DisplaySection/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 5 ? 100 : 0}vh`, width: `${currentSectionNumber === 5 ? 100 : 0}vw` }}>
                <SecondDisplaySection/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 6 ? 100 : 0}vh`, width: `${currentSectionNumber === 6 ? 100 : 0}vw` }}>
                <ProcessorSection/>
            </div>
            <div className={styles.stripe} style={{height: `${currentSectionNumber === 7 ? 100 : 0}vh`, width: '100vw'}}>
                <BatterySection/>
            </div>
                <ColorContextProvider >
                    <div className={styles.stripe} style={{ height: `${sectionsVisible ? 100 : 0}vh`, width: `${sectionsVisible ? 100 : 0}vw` }}>
                        <ColorSection currentSection={currentSectionNumber} />
                    </div>
                    <div className={styles.stripe} style={{ height: `${currentSectionNumber === 14 ? 100 : 0}vh`, width: `${currentSectionNumber === 14 ? 100 : 0}vw` }}>
                            <CameraSection currentSectionNumber={currentSectionNumber} />
                    </div>
                    <div className={styles.stripe} style={{ height: `${currentSectionNumber === 15 ? 100 : 0}vh`, width: `${currentSectionNumber === 15 ? 100 : 0}vw` }}>
                        <PricingSection />
                    </div>
                </ColorContextProvider>
            {/*<div className={styles.stripe} style={{height: `${currentSectionNumber === 16 ? 100 : 0}vh`, width: `${currentSectionNumber === 16 ? 100 : 0}vw` }}>*/}
            {/*    /!*<InteractionSection/>*!/*/}
            {/*</div>*/}
        </>
    );
}