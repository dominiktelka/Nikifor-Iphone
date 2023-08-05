import Scene from "./scene/Scene";
import styles from './App.module.css'
import ScrollControls from "./controls/ScrollControls";
import {Suspense, useEffect, useState} from "react";
import Background from "./background/Background";
import InteractionSection from "./InteractionSection/InteractionSection";
import LoadingUpdater from "./loading-screen/LoadingUpdater";
import LoadingScreen from "./loading-screen/LoadingScreen";


function App() {

    const [requestScrollToSection, setRequestScrollToSection] = useState(0)

    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => setRequestScrollToSection(1), 100)
        }
    }, [isLoading])


    return (
        <div className={styles.mainContainer}>

            <LoadingScreen isVisible={isLoading}/>
            <Suspense>
                <LoadingUpdater setIsLoading={setIsLoading}/>
                <Background scrollPercentage={scrollPercentage} sectionsAmount={16}/>

                <div className={styles.sceneContainer}>
                    <Scene scrollPercentage={scrollPercentage} />
                </div>

                <ScrollControls
                    sectionsAmount={16}
                    setScrollPercentage={setScrollPercentage}

                />

            </Suspense>

        </div>
    );
}

export default App;
