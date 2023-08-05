import React from "react";
import { useRef } from "react";
import styles from "./cameraSection.module.css";
import v1 from "../../video/Scuba Diving - 699.mp4";
import v2 from "../../video/Skate - 49791.mp4";


const CameraSection = ({currentSectionNumber}) => {
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);


  return (
    <section className={styles.section} ref={sectionRef}>
      <video className={currentSectionNumber === 14 ? `${styles.v1} ${styles.animation2}` : ''} ref={videoRef1} src={v1}  autoPlay muted loop />
      <video className={currentSectionNumber === 14 ? `${styles.v2} ${styles.animation3}` : ''} ref={videoRef2} src={v2}  autoPlay muted loop />
      <div className={styles.titleContainer} ref={titleRef}>
        <span className={currentSectionNumber === 14 ? `${styles.span} ${styles.animation}` : ''}>Ready.</span>
        <span className={currentSectionNumber === 14 ? `${styles.span} ${styles.animation}` : ''}>Steady.</span>
        <span className={currentSectionNumber === 14 ? `${styles.span} ${styles.animation}` : ''}>Action.</span>
      </div>
    </section>
  );
};

export default CameraSection;
