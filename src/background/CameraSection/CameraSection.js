import React, {useEffect, useState} from "react";
import styles from "./cameraSection.module.css";
import v1 from "../../video/Scuba Diving - 699.mp4";
import v2 from '../../video/Skate - 49791.mp4';


const CameraSection = ({currentSectionNumber,scrollPercentage}) => {

    const [opacity, setOpacity] = useState(0)
    useEffect(() => {

        const getOpacityGrowing = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 12.4 / 15
            const opacityEnd = 13 / 15

            if (scrollPercentage < opacityStart) return opacityMinimal
            if (scrollPercentage > opacityEnd) return opacityMaximal

            return opacityMinimal + (((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        const getOpacityShrinking = () => {

            const opacityMinimal = 0
            const opacityMaximal = 1
            const opacityStart = 13 / 15
            const opacityEnd = 13.8 / 15


            if (scrollPercentage > opacityEnd) return opacityMinimal

            return opacityMinimal + (1 - ((scrollPercentage - opacityStart) / (opacityEnd - opacityStart))) * (opacityMaximal - opacityMinimal)
        }

        if (scrollPercentage < 13 / 15) {
            setOpacity(getOpacityGrowing());
        } else{
            setOpacity((getOpacityShrinking()))
        }


    }, [scrollPercentage])


    return (
        <section className={styles.section}  style={{opacity:opacity}}>
            <video className={styles.v1}  src={v1}  autoPlay muted loop playsInline/>
            <video className={styles.v2}   src={v2}  autoPlay muted loop playsInline/>
            <div className={styles.titleContainer} >
                <span className={styles.span}>Cinematic mode now lets you shoot in 4K HDR at 24 fps — the film industry standard.</span>
            </div>
        </section>
  );
};

export default CameraSection;
