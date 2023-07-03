import React, { useState } from 'react';
import Controller from './Controller';


const Display = () => {
    const [boxPos, setBoxPos] = useState({left: null, right: null, top: null, bottom: null, transform: null});
    const setPosition = (position) =>{
        setBoxPos({left: position.left, right: position.right, top: position.top, bottom: position.bottom, transform: position.transform})
    }

    return (
        <div>
            <div className="screen">
                <div className="box" id="box" style={boxPos} />
            </div>
            <Controller setPosition={setPosition} />
        </div>
    );
}

export default Display;