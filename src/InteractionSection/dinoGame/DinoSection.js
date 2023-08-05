import React, {useEffect, useRef, useState} from "react";
import "./dinoSection.module.css"
import {Html, useGLTF} from "@react-three/drei";


export default function DinoGame() {
    const { nodes, materials } = useGLTF('./scene.gltf')

    const [isActive, setIsActive] = useState(false);
    const dinoRef = useRef(null)
    const cactusRef = useRef(null);
    const [score, setScore] = useState(0);
    const divRef=useRef();




    useEffect(()=>{

        window.addEventListener("keydown",handleKeyDown);
        const isAlive = setInterval(checkCollision, 10);



        return () =>{
            window.removeEventListener("keydown",handleKeyDown)
            clearInterval(isAlive);
        }
    },[])



    const handleKeyDown = (event) => {
    if(event.keyCode === 32){
        setIsActive(true);
        cactusRef.current.style.animation = `block 1s infinite linear`;
        setScore((prevScore) => prevScore +1);
        setTimeout(()=>{setIsActive(false)},300);
        }
    };

    const touch =(event) =>{
        setIsActive(true);
        cactusRef.current.style.animation = `block 1s infinite linear`;
        setScore((prevScore) => prevScore +1);
        setTimeout(()=>{setIsActive(false)},300);
    }



    const checkCollision = () => {
        if (dinoRef.current && cactusRef.current) {

            //here we are taking position of dino and cactus
            const dinoTop = parseInt(
                window.getComputedStyle(dinoRef.current).getPropertyValue("top")
            );
            const cactusLeft = parseInt(
                window.getComputedStyle(cactusRef.current).getPropertyValue("left")
            );


            if (cactusLeft < 45 && cactusLeft > 0 && dinoTop >= 140) {
                alert("Game over")

                if (cactusRef.current && dinoRef.current) {
                    cactusRef.current.style.animation = 'none';
                    setScore(0)

                }
            }else{
               //setTimeout(addPoints,3000) this code is working but try later to start it only when player press spacebar or touch the screen
            }
        }
    };



    return (

        <mesh geometry={nodes.Body_Wallpaper_0.geometry} material={materials.Wallpaper}>
            <Html className="content" position={[0, 0, -0.0259]} transform scale={0.078} rotation={[0,Math.PI,0]}>
                <div className="game"  onClick={touch}>
                    <div className="score">Score:{score}</div>
                    <div ref={dinoRef} className={`dino ${isActive ?"jump" : ''}`}></div>
                    <div ref={cactusRef} className="cactus"></div>
                    <div className="ground"></div>
                </div>
            </Html>
        </mesh>
    )
}
