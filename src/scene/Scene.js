import React, {useEffect, useRef} from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Environment, useGLTF} from "@react-three/drei"
import {Model} from "../gameModel/Model";
import {getProject} from "@theatre/core";
import {PerspectiveCamera, SheetProvider, useCurrentSheet} from "@theatre/r3f";
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import * as THREE from 'three'

import animatedIphone2 from './animatedIphone2.json';
import iphoneAnimation from './iphoneAnimation.json'
// studio.initialize()
// studio.extend(extension)

// gl={{preserveDrawingBuffer:true}}

const demoSheet =getProject('Demo Project',{state:iphoneAnimation}).sheet('Demo Sheet')
// const demoSheet =getProject('Demo Project').sheet('Demo Sheet')

const Scene = ({scrollPercentage}) =>{

    return(
        <Canvas gl={{preserveDrawingBuffer:true}}>
            <SheetProvider sheet={demoSheet}>
                <RendererSetup/>
                <ScrollToAnimationPasser scrollPercentage={scrollPercentage}/>
                <PerspectiveCamera
                    theatreKey='Camera'
                    makeDefault
                    position={[0, 0, 1]}
                    fov={100}
                />
                <ambientLight intensity={1}/>
                {/*<directionalLight color='red' position={[10,0,0]}/>*/}
                <Environment preset="warehouse"/>
                <Model/>
            </SheetProvider>
        </Canvas>
    )


}

export default Scene;

function RendererSetup() {

    const {gl} = useThree()

    useEffect(() => {
        gl.outputEncoding = THREE.sRGBEncoding
    }, [])

    return null;
}

function ScrollToAnimationPasser({scrollPercentage}) {

    const sheet = useCurrentSheet();

    useFrame(() => {
        sheet.sequence.position = scrollPercentage * 4

    });

    return null
}