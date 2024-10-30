import {useState, useEffect} from 'react';

const Timer = () => {
    const [time, setTime] = useState (0);
    const [run , setRun] = useState (false);
    useEffect(() => {
        console.log('create effect');
        if (run) {
            console.log('create setInterval');
            const idInterval = setInterval(()=>{
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            return () => {
                console.log('clear effect ');
                clearInterval(idInterval);
            };
        }   
     
    }, [run]);
    const startTimer = () => {setRun(true)}
    const stopTimer = () => {setRun(false)}
    const resetTimer = () => {setRun(false);setTime(0);}

    return (
        <article>
            <h2>
                Timer: {time} seconds 
            </h2>
            <div>
                <button onClick ={startTimer}> 
                    start
                    </button>
                <button onClick ={stopTimer}>
                    stop
                    </button>
                <button onClick ={resetTimer}>
                    reset
                    </button>
            </div>
        </article>
    );
}

export default Timer;
