import React, { useEffect, useRef, useState } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    const intervalRef = useRef();


    useEffect(() => {

        const updateCurrentTime = () => {
            setCurrentTime(new Date());
        };


        intervalRef.current = setInterval(updateCurrentTime, 1000);


        return () => {

            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default Clock;
