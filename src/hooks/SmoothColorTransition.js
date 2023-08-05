import React, { useEffect, useRef } from "react";

function interpolateColor(color1, color2, factor) {
    const result = color1.map((value, index) => {
        const delta = color2[index] - value;
        return Math.round(value + delta * factor);
    });
    return `rgba(${result.join(",")})`;
}

function SmoothColorTransition({ initialColor, finalColor, duration, children }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        let startTime = null;

        function animateColor(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const easeProgress = easeOutCubic(progress); // Dodajemy efekt "ease-out" do animacji

            if (progress >= 1) {
                sectionRef.current.style.backgroundColor = finalColor;
            } else {
                const interpolatedColor = interpolateColor(
                    initialColor.match(/\d+/g).map(Number),
                    finalColor.match(/\d+/g).map(Number),
                    easeProgress
                );

                // Wykorzystujemy przestrzeń HSL, aby płynnie interpolować barwy

                requestAnimationFrame(animateColor);
            }
        }

        requestAnimationFrame(animateColor);

        return () => {
            sectionRef.current.style.backgroundColor = finalColor;
        };
    }, [initialColor, finalColor, duration]);

    // Funkcja do interpolacji efektu "ease-out" cubic
    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    return React.cloneElement(children, { ref: sectionRef });
}

export default SmoothColorTransition;
