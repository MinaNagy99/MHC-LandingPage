import React, { useEffect, useRef } from 'react';

const Counter = ({ targetNumber, duration }) => {
    const ref = useRef(); // Ref to store the DOM element (the <p> tag)
    const start = useRef(0); // UseRef to keep track of the current count without causing re-renders
    const hasAnimated = useRef(false); // To prevent re-animating if already done

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                // Start the animation when the element is in the viewport
                hasAnimated.current = true; // Mark the animation as done
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
            }
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        if (ref.current) {
            observer.observe(ref.current); // Observe the element
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Clean up observer when component unmounts
            }
        };
    }, [targetNumber, duration]);

    return <p data-aos="fade-zoom-in" className="numbers circle" ref={ref}>0</p>;
};

export default Counter;
