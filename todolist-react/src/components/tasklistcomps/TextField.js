import React from "react";

const TextField = ({text, setText}) => {
    
    const handleInputChange = (event) => {
        setText(event.target.value);
    }

    return (
        <input className="text-field"value={text} name="todo" type="text" placeholder="Add task" onChange={handleInputChange} />
    )
}

export default TextField;