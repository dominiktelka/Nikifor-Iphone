import React, {useEffect, useState} from "react";
import { Canvas, useFrame, } from "@react-three/fiber";
import {Environment, OrbitControls, Sparkles,} from "@react-three/drei";
import { Model } from "./Model";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from "@theatre/r3f";
import * as THREE from "three";
import latest from './latest.json'
import mobileAnimation from './mobileAnimation.json'
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

// studio.initialize()
// studio.extend(extension)
// const demoSheet = getProject('Demo Project').sheet('Demo Sheet')
// gl={{preserveDrawingBuffer:true}}
//




const Scene = ({ scrollPercentage, isInteractive,nodes, materials,currentSectionNumber }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const demoSheet = getProject("Demo Project", { state: isMobile ? mobileAnimation : latest }).sheet("Demo Sheet");

    const canvasProps = isInteractive
        ? { gl: { preserveDrawingBuffer: true, outputEncoding: THREE.sRGBEncoding } }
        : { camera: { fov: 60 } };

    const sectionsVisible = [1, 2, 3, 4, 5, 6,7,15].includes(currentSectionNumber);

    return (
        <>
            <Canvas {...canvasProps}>
                <ambientLight intensity={1} />
                <Environment preset="warehouse" />
                <Model isInteractive={isInteractive} nodes={nodes} materials={materials}/>
                { sectionsVisible ? <Sparkles
                    scale={20}
                    amount={200}
                    position={[0, 0, 0]}
                    size={4}
                    color={'white'}/> : ''}
                {isInteractive ? (
                    <SheetProvider sheet={demoSheet}>
                        <ScrollToAnimationPasser scrollPercentage={scrollPercentage} />
                        <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 1]} fov={50}/>
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
