import {useState, useEffect} from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('create effect');
        
        return () => {
            console.log('clear effect ');
            
        };
    }, []);
    return (
        <article>
            <h2>
                Timer: {time} seconds 
            </h2>
        </article>
    );
}

export default Timer;
