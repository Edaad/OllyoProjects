import React, { useState } from 'react';
import Controller from './Controller';
import Box from './Box';


const Display = () => {

    return (
        <div>
            <div className="screen">
                <Box />
            </div>
            <Controller />
        </div>
    );
}

export default Display;