import React from "react";

const green = "#65c568";
const red = "#ff4a4a";

const Indicator = ({ status, notEmpty }) => {
  let dotStyle = {
    active: { backgroundColor: green, display: "block" },
    inactive: { backgroundColor: red, display: "block" },
  };

  return (
    <div>
      {notEmpty && (
        <span
          className="indicator"
          style={status ? dotStyle.active : dotStyle.inactive}
        />
      )}
    </div>
  );
};

export default Indicator;
