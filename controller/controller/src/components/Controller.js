import React, { useState } from "react";
import { setBoxPosition } from "../actions";
import { useDispatch } from "react-redux";

const Controller = () => {

    let buttons = [
        {type: 'top-left', top: '0', left: '0', transform: 'translate(0, 0)', right: null, bottom: null},
        {type: 'top-mid', top: '0', left: '50%', transform: 'translate(-50%, 0)', right: null, bottom: null},
        {type: 'top-right', top: '0', right: '0', transform: 'translate(0, 0)', left: null, bottom: null},
        {type: 'mid-left', top: '50%', left: '0', transform: 'translate(0, -50%)', right: null, bottom: null},
        {type: 'mid-mid', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', right: null, bottom: null},
        {type: 'mid-right', top: '50%', right: '0', transform: 'translate(0, -50%)', left: null, bottom: null},
        {type: 'bottom-left', bottom: '0', left: '0', transform: 'translate(0, 0)', right: null, top: null},
        {type: 'bottom-mid', bottom: '0', left: '50%', transform: 'translate(-50%, 0)', right: null, top: null},
        {type: 'bottom-right', bottom: '0', right: '0', transform: 'translate(0, 0)', left: null, top: null},
    ]

    
    const dispatch = useDispatch();

    const handleClick = (position) => {
        const boxPosition = {
            left: position.left, 
            right: position.right, 
            top: position.top, 
            bottom: position.bottom, 
            transform: position.transform
        }

        dispatch(setBoxPosition(boxPosition))
    }

    return (
        <div className="controller">
            <div className="button-wrapper">
                {buttons.map((position, i)=>(
                    <button className="button" onClick={()=>{handleClick(position);}} key={i}></button>
                ))}
            </div>
        </div>
    );
}

export default Controller;