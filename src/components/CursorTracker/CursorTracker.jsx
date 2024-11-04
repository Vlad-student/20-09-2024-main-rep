import {useState, useEffect} from 'react';

const CursorTracker = () => {
    const [coords, setcoords] = useState({x:0, y:0});
    useEffect(() => {
        window.document.body.addEventListener('mousemove', changeCoords);
        return () => {
            window.document.body.removeEventListener('mousemove', changeCoords);
        }; 
    }, []);
    return (
        <div>
            <h2>cursor position</h2>
            <h3> x: {coords.x} </h3>
            <h3> y: {coords.y} </h3>
        </div>
    );
}

export default CursorTracker;
