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


export default function Background({calculateSectionRange, currentSectionNumber , materials,scrollPercentage, sectionsAmount}) {
    const getOpacity = (scrollPercentage, startPercentage, endPercentage) => {
        const opacityMinimal = 0;
        const opacityMaximal = 1;

        if (scrollPercentage < startPercentage) return opacityMaximal;
        if (scrollPercentage > endPercentage) return opacityMinimal;

        return opacityMaximal - ((scrollPercentage - startPercentage) / (endPercentage - startPercentage)) * (opacityMaximal - opacityMinimal);

    };
//@todo look at getOpacity function cuz there is some problem with swaping between sections, if the secion have higher index the oapcity change faster, before end of section range
    const sectionStyles = Array.from({ length: sectionsAmount }).map((_, index) => {
        const { startPercentage, endPercentage } = calculateSectionRange(index + 1);
        // Przelicz scrollPercentage na skalę 0-100
        const scaledScrollPercentage = scrollPercentage * 100;
        console.log(startPercentage,endPercentage)
        // Oblicz wartość opacity tylko w obrębie widocznej sekcji
        const opacity = (currentSectionNumber -1) === index ? getOpacity(scaledScrollPercentage, startPercentage, endPercentage) : 0;
        return {
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            opacity: opacity,
            position: 'absolute',
        };
    });

    return (
        <>
            {sectionStyles.map((style, index) => (
                <div key={index} style={style}>
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