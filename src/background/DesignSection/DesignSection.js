import React from 'react';
import styles from './DesingSection.module.css';

const DesignSection = ({ currentSectionNumber }) => {

    return (
        <>
            <p className={styles.textContainer}>
                <span className={currentSectionNumber === 3 ? styles.moveLeftToRight : ''}>Flaw-less design with strong durability.</span>
            </p>
            <p className={styles.textContainer2}>
                <span className={ currentSectionNumber === 3 ? styles.moveRightToLeft : ''}>Flat-edge design with toughest smartphone glass</span>
            </p>
        </>


    );
};

export default DesignSection;