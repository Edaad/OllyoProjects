import React from "react";

const Input = ({ name, onChange, placeholder, type, label }) => {
  return (
    <div className="div">
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
