import React, { useState } from "react";

const Controller = ({setPosition}) => {

    let buttons = [
        {type: 'top-left', top: '0', left: '0', transform: 'translate(0, 0)'},
        {type: 'top-mid', top: '0', left: '50%', transform: 'translate(-50%, 0)'},
        {type: 'top-right', top: '0', right: '0', transform: 'translate(0, 0)'},
        {type: 'mid-left', top: '50%', left: '0', transform: 'translate(0, -50%)'},
        {type: 'mid-mid', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'},
        {type: 'mid-right', top: '50%', right: '0', transform: 'translate(0, -50%)'},
        {type: 'bottom-left', bottom: '0', left: '0', transform: 'translate(0, 0)'},
        {type: 'bottom-mid', bottom: '0', left: '50%', transform: 'translate(-50%, 0)'},
        {type: 'bottom-right', bottom: '0', right: '0', transform: 'translate(0, 0)'},
    ]

    

    const handleClick = (position) => {
        setPosition(position);
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