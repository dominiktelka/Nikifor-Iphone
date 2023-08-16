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
        const animationDuration = 800; // Czas trwania animacji w milisekundach
        const frames = 60; // Liczba klatek animacji
        const frameDuration = animationDuration / frames;

        const animateFrame = (currentFrame) => {
            const progress = currentFrame / frames; // Postęp animacji od 0 do 1
            const interpolatedColor = {
                r: startColor.r + (endColor.r - startColor.r) * progress,
                g: startColor.g + (endColor.g - startColor.g) * progress,
                b: startColor.b + (endColor.b - startColor.b) * progress,
            };

            // Tutaj można wprowadzić dodatkowe modyfikacje w zależności od pozycji poziomej

            materials.Body.color.copy(interpolatedColor);

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
