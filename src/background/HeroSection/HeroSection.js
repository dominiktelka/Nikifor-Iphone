import React from 'react';
import backgroundVideo from "../../video/Ink - 21536.mp4";
import styles from "./HeroSection.module.css";

const HeroSection = ({ currentSectionNumber }) => {

    return (
        <>
            {currentSectionNumber === 2 && (
                <div className={styles.videoContainer}>
                    <video
                        className={styles.video}
                        src={backgroundVideo}
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
            )}
            <h1 className={currentSectionNumber === 2 ? `${styles.animation} ${styles.title}` : ''}>Iphone 14 Pro max</h1>
            <div className={currentSectionNumber === 2? `${styles.animation} ${styles.title2}` : ''}>
                <span>so bold</span>
                <span>so cold</span>
            </div>
        </>
    );
};

export default HeroSection;



