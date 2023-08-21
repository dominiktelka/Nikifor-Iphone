import styles from './ScrollControls.module.css'
import {useEffect, useRef} from "react";
import interactionSection from "../background/InteractionSection/InteractionSection";

export default function ScrollControls({sectionsAmount, requestScrollToSection, setRequestScrollToSection, setScrollPercentage}) {

    const mainContainerRef = useRef()

    useEffect(() => {
        if (requestScrollToSection !== null) {
            mainContainerRef.current.children.item(requestScrollToSection).scrollIntoView({behavior: 'smooth'})
            setRequestScrollToSection(null)
        }
    }, [requestScrollToSection])


    const handleScroll = (e) => {
        const scrollPercentage = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)
        setScrollPercentage(scrollPercentage)
    }

    return (
        <div className={styles.mainContainer} ref={mainContainerRef} onScroll={handleScroll}>
            {Array.from({ length: sectionsAmount }, (_, index) => (
                <div className={styles.section} key={index} />
            ))}
        </div>
    )
}
