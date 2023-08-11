import React from 'react';
import styles from './processorSection.module.css'
import a16 from "./a16.jpg"


const ProcessorSection = ({currentSectionNumber}) =>{


    return(
        <section className={ currentSectionNumber === 6 ? `${styles.animation} ${styles.section}` : ''}>
            <h1>Fastest Processor</h1>
            <div className={styles.imgContainer}>
                <img src={a16} alt="A16 Processor"/>
            </div>
            <div className={styles.text}>
                <span>Nearly 16 billion transistors for industry-leading speed and efficiency</span>
                <span>5-core GPU with 50% more memory bandwidth for complex graphics</span>
                <span>Faster 6-core CPU handles demanding workloads smoothly and efficiently</span>
                <span>Advanced ISP powers the creative flexibility of the quad-pixel sensor</span>
            </div>
        </section>
    )
}

export default ProcessorSection;