import React from "react";
import { useSelector } from "react-redux";

const Box = () =>{
    const positions = useSelector((state) => state.positions)
    let boxPos = {
        left: positions.left, 
        right: positions.right, 
        top: positions.top, 
        bottom: positions.bottom, 
        transform: positions.transform
    }
    return <div className="box" id="box" style={boxPos} />
}

export default Box;