import React, {Suspense} from 'react'
import styles from './interaction.module.css'
import {Model} from "../gameModel/Model";
import {Environment,OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import DinoGame from "./dinoGame/DinoSection";



const InteractionSection = () =>{


    return(
        <section className={styles.test}>
            <h1 style={{color:"white"}}>Simple example of how html works inside 3d model</h1>
        </section>
    )
}

export default InteractionSection;