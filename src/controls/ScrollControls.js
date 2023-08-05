import styles from './ScrollControls.module.css'
import {useEffect, useRef} from "react";

export default function ScrollControls({sectionsAmount, requestScrollToSection, setRequestScrollToSection, setScrollPercentage}) {

    const mainContainerRef = useRef()


    const handleScroll = (e) => {
        const scrollPercentage = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)
        setScrollPercentage(scrollPercentage)
    }

    return (
        <div className={styles.mainContainer} ref={mainContainerRef} onScroll={handleScroll}>
            {Array(sectionsAmount).fill().map(_ => <div className={styles.section}/>)}
        </div>
    )
}
