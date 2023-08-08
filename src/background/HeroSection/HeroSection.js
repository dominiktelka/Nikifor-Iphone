import React, { useEffect, useRef, useState } from 'react';
import backgroundVideo from "../../video/Ink - 21536.mp4";
import styles from "./HeroSection.module.css";

const HeroSection = ({ currentSectionNumber }) => {
    const videoRef = useRef(null);
    const [shouldPlay, setShouldPlay] = useState(false);

    useEffect(() => {
        if (currentSectionNumber === 2) {
            setShouldPlay(true);
        } else {
            setShouldPlay(false);
        }
    }, [currentSectionNumber]);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (shouldPlay && videoElement.paused) {
            videoElement.play();
        } else if (!shouldPlay && !videoElement.paused) {
            videoElement.pause();
            videoElement.currentTime = 0; // Przewiń video do początku
        }
    }, [shouldPlay]);

    return (
        <>
            <div className={styles.videoContainer}>
                <video
                    className={styles.video}
                    ref={videoRef}
                    src={backgroundVideo}
                    autoPlay
                    muted
                    loop
                ></video>
            </div>
            <h1 className={styles.title}>Iphone 14 Pro max</h1>
            <div className={styles.title2}>
                <span>so bold</span>
                <span>so cold</span>
            </div>
        </>
    );
};

export default HeroSection;



