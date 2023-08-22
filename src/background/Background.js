import QuoteSection from "./Quote/QuoteSection";
import HeroSection from "./HeroSection/HeroSection";
import DesignSection from "./DesignSection/DesignSection";
import DisplaySection from "./DisplaySection/DisplaySection";
import SecondDisplaySection from "./DisplaySection/SecondDisplaySection";
import ProcessorSection from "./ProcessorSection/ProcessorSection";
import BatterySection from "./BatterySection/BatterySection";
import PricingSection from "./PricingSection/PricingSection";
import CameraSection from "./CameraSection/CameraSection";
import ColorSection from "./ColorSection/ColorSection";
import React from "react";
import styles from './Background.module.css'
import InteractionSection from "./InteractionSection/InteractionSection";





export default function Background({calculateSectionRange, currentSectionNumber ,scrollPercentage, sectionsAmount,setRequestScrollToSection}) {
console.log(currentSectionNumber,scrollPercentage)
    // const getOpacity = (scrollPercentage, startPercentage, endPercentage) => {
    //
    //     const opacityMinimal = 0;
    //     const opacityMaximal = 1;
    //
    //     if (scrollPercentage < startPercentage) return opacityMaximal;
    //     if (scrollPercentage > endPercentage) return opacityMinimal;
    //
    //     return opacityMaximal - ((scrollPercentage - startPercentage) / (endPercentage - startPercentage)) * (opacityMaximal - opacityMinimal) + 0.0015;
    //
    // };
    //
    //
    // const sectionStyles = Array.from({ length: sectionsAmount-9 }).map((_, index) => {
    //     const { startPercentage, endPercentage } = calculateSectionRange(index + 1);
    //     const scaledScrollPercentage = scrollPercentage * 100;
    //     const opacity = (currentSectionNumber -1) === index ? getOpacity(scaledScrollPercentage, startPercentage, endPercentage): 0;
    //     return {
    //         height: '100svh',
    //         width: '100vw',
    //         opacity: opacity,
    //         position: 'absolute',
    //     };
    // });
    //
    {/*//         {sectionStyles.map((style, index) => (*/}
    {/*//             <div key={index} style={style}>*/}
    {/*//                 /!*{index === 0 && <QuoteSection scrollPercentage={scrollPercentage}/>}*!/*/}
    {/*//                 /!*{index === 1 && <HeroSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>}*!/*/}
    {/*//                 {index === 2 && <DesignSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>}*/}
    {/*//                 {index === 3 && <DisplaySection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>}*/}
    {/*//                 {index === 4 && <SecondDisplaySection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>}*/}
    {/*//                 {index === 5 && <ProcessorSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>}*/}
    {/*//                 {index === 6 && <BatterySection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>}*/}
    {/*//             </div>*/}
    {/*//         ))}*/}

    return (
        <>

            <QuoteSection scrollPercentage={scrollPercentage}/>
            <HeroSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <DesignSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <DisplaySection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <SecondDisplaySection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <ProcessorSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <BatterySection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <ColorSection currentSection={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <CameraSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <PricingSection currentSectionNumber={currentSectionNumber} scrollPercentage={scrollPercentage}/>
            <InteractionSection scrollPercentage={scrollPercentage}/>
            {currentSectionNumber === 16 ? ("") : (<button className={`${styles.button} ${styles.appearAnimation}`} onClick={() => setRequestScrollToSection(currentSectionNumber)}>Next</button>)}
        </>
    );

}