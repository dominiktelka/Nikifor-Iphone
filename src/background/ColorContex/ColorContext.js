import {createContext, useState} from "react";
import * as THREE from 'three'

export const ColorContext = createContext({});

export const ColorContextProvider = ({ children,materials }) => {
    const [currentColor, setCurrentColor] = useState({
        color: "#9BB5CE",
        text: "Sierra Blue",
        rgbColor: "155, 181, 206",
    });
    let changeColorContext = async (colorObj) => {
        const startColor = materials.Body.color.clone(); // Klonuj obecny kolor materiału
        const endColor = new THREE.Color(colorObj.color);

        await animateColorTransition(startColor, endColor); // Uruchom animację

        setCurrentColor(colorObj);
    };

    const animateColorTransition = async (startColor, endColor) => {
        const animationDuration = 1000; // Czas trwania animacji w milisekundach
        const frames = 60; // Liczba klatek animacji
        const frameDuration = animationDuration / frames;

        const colorStep = [
            (endColor.r - startColor.r) / frames,
            (endColor.g - startColor.g) / frames,
            (endColor.b - startColor.b) / frames,
        ]; // Krok zmiany koloru na każdą klatkę

        const animateFrame = (currentFrame) => {
            startColor.r += colorStep[0];
            startColor.g += colorStep[1];
            startColor.b += colorStep[2];
            materials.Body.color.copy(startColor);

            if (currentFrame < frames) {
                setTimeout(() => {
                    animateFrame(currentFrame + 1);
                }, frameDuration);
            }
        };

        animateFrame(1);
    };

    return (
        <ColorContext.Provider value={{ currentColor, changeColorContext }}>
            {children}
        </ColorContext.Provider>
    );
};
