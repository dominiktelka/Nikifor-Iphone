import Scene from "./scene/Scene";
import styles from './App.module.css'
import ScrollControls from "./controls/ScrollControls";
import {Suspense, useEffect, useState} from "react";
import Background from "./background/Background";
import InteractionSection from "./InteractionSection/InteractionSection";
import LoadingUpdater from "./loading-screen/LoadingUpdater";
import LoadingScreen from "./loading-screen/LoadingScreen";
import {useGLTF} from "@react-three/drei";


function App() {

    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const { nodes, materials } = useGLTF('./scene.gltf')
    const [isInteractive, setIsInteractive] = useState(true)


    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => 1, 100)
        }
    }, [isLoading])

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
                <Background currentSectionNumber={currentSectionNumber} nodes={nodes} materials={materials}/>

                <div className={isInteractive ? styles.sceneContainer : styles.sceneContainerActive}>
                    <Scene scrollPercentage={scrollPercentage} isInteractive={isInteractive} nodes={nodes} materials={materials} currentSectionNumber={currentSectionNumber}/>
                </div>

                <ScrollControls
                    sectionsAmount={16}
                    setScrollPercentage={setScrollPercentage}

                />
                <button className={currentSectionNumber === 15 ? `${styles.button360} ${styles.animationMoveRight}`: '' } style={{opacity:`${currentSectionNumber === 15 ? 1 : 0}`, zIndex:`${currentSectionNumber === 15 ? 2 : -1}` }}
                        onClick={()=>{toggleAnimation()}}>
                    {isInteractive ? 'Enable 360' : 'Disable 360'}
                </button>

            </Suspense>

        </div>
    );
}

export default App;
