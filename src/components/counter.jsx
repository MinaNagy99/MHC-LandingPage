import React, { useEffect, useRef } from 'react';

const Counter = ({ targetNumber, duration }) => {
    const ref = useRef(); // Ref to store the DOM element (the <p> tag)
    const start = useRef(0); // UseRef to keep track of the current count without causing re-renders

    useEffect(() => {
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const progressRatio = Math.min(progress / (duration * 1000), 1); // Calculate how far along we are

            const currentNumber = Math.floor(progressRatio * targetNumber);
            ref.current.innerText = currentNumber;

            if (progressRatio < 1) {
                requestAnimationFrame(animate); // Keep animating until we reach the target number
            }
        };

        requestAnimationFrame(animate);
    }, [targetNumber, duration]);

    return   <p className="numbers" ref={ref}>0</p>;
    
};

export default Counter;
