import React from "react";

const FurnitureSelection = () => {
  return (
    <div>
      <div>
        <label>Height (CM)</label>
        <input type="text" id="height"></input>
      </div>
      <div>
        <label>Width (CM)</label>
        <input type="text" id="width"></input>
      </div>
      <div>
        <label>Length (CM)</label>
        <input type="text" id="length"></input>
      </div>
    </div>
  );
};

export default FurnitureSelection;
