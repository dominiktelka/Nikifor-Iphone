import React from 'react';
import styles from './processorSection.module.css'
import a15 from "./A15-Bionic.jpg"


const ProcessorSection = ({currentSectionNumber}) =>{


    return(
        <section className={ currentSectionNumber === 6 ? `${styles.animation} ${styles.section}` : ''}>
            <h1>Fastest Processor</h1>
            <div className={styles.imgContainer}>
                <img src={a15} alt="A15 Processor"/>
            </div>
            <div className={styles.text}>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam aspernatur ea exercitationem itaque iusto modi natus non quam quia, sunt tempore vel voluptates. Consectetur enim harum hic tempore veniam.
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet asperiores at cupiditate deserunt doloribus eveniet ex harum impedit laudantium minus nisi perspiciatis praesentium quaerat quos rem repudiandae totam unde.Aperiam dolor dolorem ducimus illo, impedit laboriosam libero magni minima nemo neque nesciunt odit reprehenderit sapiente, suscipit totam vel voluptate. Aliquid cupiditate debitis error inventore magni molestiae officiis reprehenderit similique.
                </span>
            </div>
        </section>
    )
}

export default ProcessorSection;