import styles from './Background.module.css'
import {useEffect, useState} from "react";
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


export default function Background({ currentSectionNumber , materials}) {
    // const [prevSectionNumber, setPrevSectionNumber] = useState(currentSectionNumber);
    //
    // const getSectionAnimation = (sectionNumber) => {
    //     if (sectionNumber === currentSectionNumber) {
    //         return `${styles.expandCollapse}`;
    //     }
    //     if (sectionNumber === prevSectionNumber) {
    //         return `${styles.expandCollapse}`;
    //     }
    //     return "";
    // };
    //
    // const sectionStyles = Array.from({ length: 16 }).map((_, index) => {
    //     const isVisible = currentSectionNumber === index + 1;
    //     const animationClass = getSectionAnimation(index + 1);
    //
    //     return {
    //         height: isVisible ? "100vh" : "0",
    //         width: "100vw",
    //         overflow: "hidden",
    //         transition: "none",
    //         animation: `${styles.smoothTransition} ${animationClass}`,
    //     };
    // });
    //
    // useEffect(() => {
    //     if (currentSectionNumber !== prevSectionNumber) {
    //         setPrevSectionNumber(currentSectionNumber);
    //     }
    // }, [currentSectionNumber]);
    //
    //


    const sectionStyles = Array.from({ length: 16 }).map((_, index) => {
        const isVisible = currentSectionNumber === index + 1;
        const height = isVisible ? "100%" : "0";
        return {
            height,
            width: "100vw",
            overflow: "hidden",
            transition: "height 1s linear",
        };
    });

    return (
        <>
            {sectionStyles.map((style, index) => (
                <div key={index} className={styles.stripe} style={style}>
                    {index === 0 && <QuoteSection/>}
                    {index === 1 && <HeroSection/>}
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
        </>
    );


    // return (
    //
    //     <>
    //         <div className={styles.stripe} style={{ height: `${currentSectionNumber === 1 ? 100 : 0}vh`, width:'100vw' }}>
    //             <QuoteSection/>
    //         </div>
    //         <div className={styles.stripe} style={{height: `${currentSectionNumber === 2 ? 100 : 0}vh`, width:'100vw'}}>
    //             <HeroSection/>
    //         </div>
    //         <div className={styles.stripe} style={{height: `${currentSectionNumber === 3 ? 100 : 0}vh`, width:'100vw'}}>
    //             <DesignSection currentSectionNumber={currentSectionNumber}/>
    //         </div>
    //         <div className={styles.stripe} style={{height: `${currentSectionNumber === 4 ? 100 : 0}vh`, width:'100vw' }}>
    //             <DisplaySection currentSectionNumber={currentSectionNumber}/>
    //         </div>
    //         <div className={styles.stripe} style={{height: `${currentSectionNumber === 5 ? 100 : 0}vh`, width:'100vw' }}>
    //             <SecondDisplaySection currentSectionNumber={currentSectionNumber}/>
    //         </div>
    //         <div className={styles.stripe} style={{height: `${currentSectionNumber === 6 ? 100 : 0}vh`, width:'100vw' }}>
    //             <ProcessorSection currentSectionNumber={currentSectionNumber}/>
    //         </div>
    //         <div className={styles.stripe} style={{height: `${currentSectionNumber === 7 ? 100 : 0}vh`, width:'100vw'}}>
    //             <BatterySection currentSectionNumber={currentSectionNumber}/>
    //         </div>
    //             <ColorContextProvider materials={materials}>
    //                 <div className={styles.stripe} style={{ height: `${sectionsVisible ? 100 : 0}vh`, width:'100vw' }}>
    //                     <ColorSection currentSection={currentSectionNumber} />
    //                 </div>
    //                 <div className={styles.stripe} style={{ height: `${currentSectionNumber === 14 ? 100 : 0}vh`, width:'100vw' }}>
    //                         <CameraSection currentSectionNumber={currentSectionNumber} />
    //                 </div>
    //                 <div className={styles.stripe} style={{ height: `${currentSectionNumber === 15 ? 100 : 0}vh`, width:'100vw' }}>
    //                     <PricingSection currentSectionNumber={currentSectionNumber}/>
    //                 </div>
    //             </ColorContextProvider>
    //         {/*<div className={styles.stripe} style={{height: `${currentSectionNumber === 16 ? 100 : 0}vh`, width: `${currentSectionNumber === 16 ? 100 : 0}vw` }}>*/}
    //         {/*    /!*<InteractionSection/>*!/*/}
    //         {/*</div>*/}
    //     </>
    // );
}