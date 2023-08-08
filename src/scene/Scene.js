import React, { useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Model } from "./Model";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from "@theatre/r3f";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import * as THREE from "three";

import latest from './latest.json'


// studio.initialize()
// studio.extend(extension)

// gl={{preserveDrawingBuffer:true}}

const demoSheet = getProject("Demo Project", { state: latest }).sheet("Demo Sheet");
// const demoSheet = getProject('Demo Project').sheet('Demo Sheet')


const Scene = ({ scrollPercentage, isInteractive }) => {
    const canvasProps = isInteractive
        ? { gl: { preserveDrawingBuffer: true, outputEncoding: THREE.sRGBEncoding } }
        : { camera: { fov: 60 } };

    return (
        <>
            <Canvas {...canvasProps}>
                <ambientLight intensity={1} />
                <Environment preset="warehouse" />
                <Model isInteractive={isInteractive}/>
                {isInteractive ? (
                    <SheetProvider sheet={demoSheet}>
                        <ScrollToAnimationPasser scrollPercentage={scrollPercentage} />
                        <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 1]} fov={50}/>
                    </SheetProvider>
                ) : (
                    <>
                        <OrbitControls minZoom={1} maxZoom={2} />
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
