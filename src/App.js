import Scene from "./scene/Scene";
import styles from './App.module.css'
import ScrollControls from "./controls/ScrollControls";
import {Suspense, useEffect, useState} from "react";
import Background from "./background/Background";
import InteractionSection from "./InteractionSection/InteractionSection";
import LoadingUpdater from "./loading-screen/LoadingUpdater";
import LoadingScreen from "./loading-screen/LoadingScreen";


function App() {
    
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => 1, 100)
        }
    }, [isLoading])
    const [isInteractive, setIsInteractive] = useState(true)

    const toggleAnimation = () => {
        setIsInteractive((prev) => !prev);
    };

    const calculateSectionRange = (sectionNumber) => {
        const sectionPercentage = 100 / 16;
        const startPercentage = (sectionNumber - 1) * sectionPercentage;
        const endPercentage = sectionNumber * sectionPercentage;
        return { startPercentage, endPercentage };
    };


    const generateSections = (scrollPercentage) => {
        let visibleSection = null;

        for (let i = 1; i <= 16; i++) {
            const { startPercentage, endPercentage } = calculateSectionRange(i);
            if (scrollPercentage >= startPercentage / 100 && scrollPercentage <= endPercentage / 100) {
                visibleSection = i;
                break;
            }
        }
        return visibleSection;
    };

    const currentSectionNumber = generateSections(scrollPercentage);

    return (
        <div className={styles.mainContainer}>

            <LoadingScreen isVisible={isLoading}/>
            <Suspense>
                <LoadingUpdater setIsLoading={setIsLoading}/>
                <Background scrollPercentage={scrollPercentage} currentSectionNumber={currentSectionNumber}/>

                <div className={isInteractive ? styles.sceneContainer : styles.sceneContainerActive}>
                    <Scene scrollPercentage={scrollPercentage} isInteractive={isInteractive} />
                </div>

                <ScrollControls
                    sectionsAmount={16}
                    setScrollPercentage={setScrollPercentage}

                />
                <button className={styles.button360} style={{zIndex:`${currentSectionNumber === 15 ? 1 : -1}`}}
                        onClick={()=>{toggleAnimation()}}>
                    {isInteractive ? 'Włącz tryb 360' : 'Wyłącz tryb 360'}
                </button>

            </Suspense>

        </div>
    );
}

export default App;
