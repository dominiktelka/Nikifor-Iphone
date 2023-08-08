import React, { useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Model } from "../gameModel/Model";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from "@theatre/r3f";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import * as THREE from "three";

import animatedIphone2 from "./animatedIphone2.json";
import iphoneAnimation from "./iphoneAnimation.json";

studio.initialize()
studio.extend(extension)

// gl={{preserveDrawingBuffer:true}}

// const demoSheet = getProject("Demo Project", { state: iphoneAnimation }).sheet("Demo Sheet");
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')


const Scene = ({ scrollPercentage, isInteractive }) => {
    const canvasProps = isInteractive
        ? { gl: { preserveDrawingBuffer: true, outputEncoding: THREE.sRGBEncoding } }
        : { camera: { fov: 60 } };

    return (
        <>
            <Canvas {...canvasProps}>
                {isInteractive ? (
                    <SheetProvider sheet={demoSheet}>
                        <ScrollToAnimationPasser scrollPercentage={scrollPercentage} />
                        <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 1]} fov={100}/>
                        <ambientLight intensity={1} />
                        <Environment preset="warehouse" />
                        <Model isInteractive={isInteractive}/>
                    </SheetProvider>
                ) : (
                    <>
                        <Model isInteractive={isInteractive}/>
                        <ambientLight intensity={1} />
                        <Environment preset="warehouse" />
                        <OrbitControls enableZoom={false} />
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
        sheet.sequence.position = scrollPercentage * 4;
    });

    return null;
}
