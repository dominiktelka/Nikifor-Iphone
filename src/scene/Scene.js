import React, {useContext, useEffect, useState} from "react";
import { Canvas, useFrame, } from "@react-three/fiber";
import {Environment, Float, OrbitControls, Sparkles,} from "@react-three/drei";
import { Model } from "./Model";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from "@theatre/r3f";
import * as THREE from "three";
import latest from './latest.json'
import mobileAnimation from './mobileAnimation.json'
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import {ColorContext} from "../background/ColorContex/ColorContext";

// studio.initialize()
// studio.extend(extension)
// const demoSheet = getProject('Demo Project').sheet('Demo Sheet')
// gl={{preserveDrawingBuffer:true}}
//




const Scene = ({ scrollPercentage, isInteractive,nodes, materials,currentSectionNumber }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { currentColor} = useContext(ColorContext);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const demoSheet = getProject("Demo Project", { state: isMobile ? mobileAnimation : latest }).sheet("Demo Sheet");

    // const canvasProps = isInteractive
    //     ? { gl: { preserveDrawingBuffer: true, outputEncoding: THREE.sRGBEncoding } }
    //     : { camera: { fov: 60 } };

    const sectionsVisible = [1, 2, 3, 4, 5, 6,7,15,16].includes(currentSectionNumber);
    const sparklesColor = `rgba(${currentColor.rgbColor}, 1)`;

    return (
        <>
            <Canvas >
                <ambientLight intensity={1} />
                <Environment preset="warehouse" />
                {sectionsVisible ?
                    (<Float>
                        <Model isInteractive={isInteractive} nodes={nodes} materials={materials}/>
                    </Float>) :
                    (<Model isInteractive={isInteractive} nodes={nodes} materials={materials}/>
                    )}
                { sectionsVisible ? <Sparkles
                    scale={30}
                    amount={300}
                    position={[0, 0, 0]}
                    size={5}
                    color={sparklesColor}/> : ''}
                {isInteractive ? (
                    <SheetProvider sheet={demoSheet}>
                        <ScrollToAnimationPasser scrollPercentage={scrollPercentage} />
                        <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 0]} fov={50}/>
                    </SheetProvider>
                ) : (
                    <>
                    <OrbitControls enableZoom={false} enablePan={false}/>
                    </>
                )}
            </Canvas>
        </>
    );
};

export default Scene;


function ScrollToAnimationPasser({ scrollPercentage }) {
    const sheet = useCurrentSheet();

    useFrame(() => {
        sheet.sequence.position = scrollPercentage * 16;
    });

    return null;
}
