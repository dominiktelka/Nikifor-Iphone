import React from 'react';
import styles from './DesingSection.module.css';

const DesignSection = ({ currentSectionNumber }) => {

    return (
        <>
            <p className={styles.textContainer}>
                <span>Flaw-less design with strong durability.</span>
            </p>
            <p className={styles.textContainer2}>
                <span >Flat-edge design with toughest smartphone glass</span>
            </p>
        </>


    );
};

export default DesignSection;