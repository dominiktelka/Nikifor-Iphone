import QuoteSection from "./Quote/QuoteSection";
import HeroSection from "./HeroSection/HeroSection";
import DesignSection from "./DesignSection/DesignSection";
import DisplaySection from "./DisplaySection/DisplaySection";
import SecondDisplaySection from "./DisplaySection/SecondDisplaySection";
import ProcessorSection from "./ProcessorSection/ProcessorSection";
import BatterySection from "./BatterySection/BatterySection";
import {ColorContextProvider} from "./ColorContex/ColorContext";
import PricingSection from "./PricingSection/PricingSection";
import CameraSection from "./CameraSection/CameraSection";
import ColorSection from "./ColorSection/ColorSection";
import React, {useEffect, useState} from "react";
import styles from './Background.module.css'




export default function Background({calculateSectionRange, currentSectionNumber , materials,scrollPercentage, sectionsAmount,setRequestScrollToSection}) {



    const getOpacity = (scrollPercentage, startPercentage, endPercentage) => {

        const opacityMinimal = 0.2;
        const opacityMaximal = 1;

        if (scrollPercentage < startPercentage) return opacityMaximal;
        if (scrollPercentage > endPercentage) return opacityMinimal;

        return opacityMaximal - ((scrollPercentage - startPercentage) / (endPercentage - startPercentage)) * (opacityMaximal - opacityMinimal) + 0.0012;

    };

    const sectionStyles = Array.from({ length: sectionsAmount }).map((_, index) => {
        const { startPercentage, endPercentage } = calculateSectionRange(index + 1);
        // Przelicz scrollPercentage na skalę 0-100
        const scaledScrollPercentage = scrollPercentage * 100;
        // Oblicz wartość opacity tylko w obrębie widocznej sekcji
        const opacity = (currentSectionNumber -1) === index ? getOpacity(scaledScrollPercentage, startPercentage, endPercentage): 0;

        return {
            height: '100svh',
            width: '100vw',
            opacity: opacity,
            position: 'absolute',
        };
    });

    return (
        <>
            {sectionStyles.map((style, index) => (
                <div key={index} style={style}>
                    {index === 0 && <QuoteSection/>}
                    {index === 1 && <HeroSection currentSectionNumber={currentSectionNumber}/>}
                    {index === 2 && <DesignSection currentSectionNumber={currentSectionNumber}/>}
                    {index === 3 && <DisplaySection currentSectionNumber={currentSectionNumber}/>}
                    {index === 4 && <SecondDisplaySection currentSectionNumber={currentSectionNumber}/>}
                    {index === 5 && <ProcessorSection currentSectionNumber={currentSectionNumber}/>}
                    {index === 6 && <BatterySection currentSectionNumber={currentSectionNumber}/>}
                    <ColorContextProvider materials={materials}>
                        {index >= 7 && index <= 12 && <ColorSection currentSection={currentSectionNumber} />}
                        {index === 13 && <CameraSection currentSectionNumber={currentSectionNumber} />}
                        {index === 14 &&<PricingSection currentSectionNumber={currentSectionNumber}/>}
                    </ColorContextProvider>
                </div>
            ))}
            {currentSectionNumber === 16 ? '' : <button className={styles.button} onClick={() => setRequestScrollToSection(currentSectionNumber)}>next </button> }

        </>
    );

}